require('dotenv').config();
const Teacher = require('./models/teacher.model');
const Student = require('./models/student.model');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('token'); // we getting this token from header
  if (!token) {
    const err = new Error('You have no token');
    err.status(401);
    next(err);
  }
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        const err = new Error('You are not authorized');
        err.status(403);
        return next(err);
      }
      req.user = user; // this value that we put in user token
      // { id, username }
      next();
    });
  } catch (err) {
    next(err);
  }
};

const isLoggedIn = (req, res, next) => {
  const token = JSON.parse(req.header('token'));
  console.log('Зашел в мидлвеер');
  console.log(token);
  if (token) {
    try {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) {
          const err = new Error('This is wrong token');
          err.status = 403;
          return next(err);
        }
        if (user.user === 'teacher') {
          const teacher = await Teacher.findById(user.id);
          return res.json(teacher);
        }
        const student = await Student.findById(user.id);
        return res.json(student);
      });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = { authenticateToken, isLoggedIn };

// app.get('/posts', (req, res) => {
//   const id = req.user.id; we gan get an access
// });

// const generateAccessToken = (user) => {
//   return jwt.sign({
//     id: teacher._id,
//     name: teacher.name
//   }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
// }
