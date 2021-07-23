const dotenv = require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const connect = require('./db/connect');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const teacherRouter = require('./routes/auth/teacher');
const studentRouter = require('./routes/auth/student');
const { isLoggedIn } = require('./middleware');
const app = express();
const testRouter = require('./routers/tasks');


app.use(cors({origin: true, credentials: true}));


connect.connect();

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
app.use('/tasks', testRouter);

app.use('/getuser', isLoggedIn);
app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);


app.all('*', (req, res, next) => {
  console.log('jere')
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // console.log('err', err);
  const { status = 500, message = 'Something went wrong' } = err;
  res.status(status).json({ errStatus: status, errMessage: message });
});

app.listen(process.env.PORT, () => {
  console.log(`server started PORT: ${process.env.PORT}`);
})
