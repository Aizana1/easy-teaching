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
const app = express();
const server = http.createServer(app)
// app.use(cors({origin: true, credentials: true,}));
const Document = require("./Document")

connect.connect();

const PORT = process.env.PORT | 5500
const io = require('socket.io')(server, {
  allowEIO3: true,
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})

// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
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

// app.use((req, res, next) => {
//   console.log('Мидлвеер',req.session.username);
//   next();
// });

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
  })
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`)
    return
  }
  console.log(`Server started on port: ${PORT}`)
})
