const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connect = require('./db/connect');
const http = require('http')
const cors = require("cors");
const jwt = require('jsonwebtoken');
const teacherRouter = require('./routes/auth/teacher');
const studentRouter = require('./routes/auth/student');
const { isLoggedIn } = require('./middleware');
const app = express();
const server = http.createServer(app)
const Document = require("./models/Document")

const testRouter = require('./routes/tasks');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const { addMessage, getMessagesInRoom } = require("./messages");
const USER_JOIN_CHAT_EVENT = "USER_JOIN_CHAT_EVENT";
const USER_LEAVE_CHAT_EVENT = "USER_LEAVE_CHAT_EVENT";
const NEW_CHAT_MESSAGE_EVENT = "NEW_CHAT_MESSAGE_EVENT";
const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";

connect.connect();

const PORT = 8080
const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
app.use(cors());

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  name: 'userCockie',
  cookie: { secure: false },
  store: MongoStore.create({ mongoUrl: process.env.DB }),
};
app.use(session(sessionConfig));

app.use('/getuser', isLoggedIn);
app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);
app.use('/tasks', testRouter);


app.all('*', (req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

const defaultValue = ""

io.on("connection", (socket) => {
	socket.emit("me", socket.id);
	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
    })
  });

  // Join a conversation
  const { roomId, name, picture } = socket.handshake.query;
  socket.join(roomId);

  const user = addUser(socket.id, roomId, name, picture);
  io.in(roomId).emit(USER_JOIN_CHAT_EVENT, user);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    const message = addMessage(roomId, data);
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, message);
  });

  // Listen typing events
  socket.on(START_TYPING_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(START_TYPING_MESSAGE_EVENT, data);
  });
  socket.on(STOP_TYPING_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(STOP_TYPING_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    removeUser(socket.id);
    io.in(roomId).emit(USER_LEAVE_CHAT_EVENT, user);
    socket.leave(roomId);
  });
   
})

async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}

app.use((err, req, res, next) => {
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).json({ errStatus: status, errMessage: message });
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`)
    return
  }
  console.log(`Server started on port: ${PORT}`)
})
app.get("/rooms/:roomId/users", (req, res) => {
  const users = getUsersInRoom(req.params.roomId);
  return res.json({ users });
});

app.get("/rooms/:roomId/messages", (req, res) => {
  const messages = getMessagesInRoom(req.params.roomId);
  return res.json({ messages });
});
