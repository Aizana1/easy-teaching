require('dotenv').config();
const sha256 = require('sha256');
const Student = require('../../models/student.model');
const jwt = require('jsonwebtoken');
const Homework = require('../../models/homework');

const signup = async (req, res, next) => {
  const { firstName, email, password, lastName, phone, languages, level } = req.body;
  try {
    const isExist = await Student.findOne({ email });
    if (isExist) {
      return res.status(409).json({ error: 'This email is taken, please login instead' });
    }
    const student = await Student.create({ firstName, email, password: sha256(password), lastName, phone, level });
    await student.languages.push(languages)
    await student.save();
    // здесь создается токен и отдается юзеру, после надо будет
    // его сохранить в localStorage
    // const accessToken = jwt.sign({
    //   id: student._id,
    //   user: 'student',
    //   email: student.email
    // }, process.env.ACCESS_TOKEN_SECRET);
    // res.status(200).json({ token: accessToken, student: 'true' });
    // res.status(200).json({ token: accessToken, student });
    res.status(200).json({ student });
  } catch(err) {
    next(err);
  }
}

const logout = (req, res, next) => {
  // неаверное он не нужен, так как на фронте если перейдет на логаут то мы просто
  // удаляем все на localStorage
}

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      const err = new Error('No student found');
      err.status(401);
      return next(err);
    }
    if (student.password === sha256(password)) {
      // const accessToken = jwt.sign({
      //   id: student._id,
      //   student: true,
      //   email: student.email
      // }, process.env.ACCESS_TOKEN_SECRET);
      // res.status(200).json({ token: accessToken, student: 'true' });
      // res.status(200).json({ token: accessToken, student });
      res.status(200).json({ student });
    }
  } catch(err) { 
    next(err);
  }
}

const homeworks = async (req, res, next) => {
  try {
    console.log('in homewrok router');
    // const homeworks = await Homework.find({ student: id });
    const allHomework = await Homework.find();
    console.log('all', allHomework);
    //возвразаю только массив с темами
    const titles = allHomeworks.map(el =>({ title: el.title, id: el._id }));
    // отдаю массив с только с темами
    res.status(200).json({ titles });
  }catch(err) {
    next(err);
  }
}

module.exports = { signup, logout, login, homeworks };
