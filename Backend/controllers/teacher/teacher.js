require('dotenv').config();
const sha256 = require('sha256');
const Teacher = require('../../models/teacher.model');
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
  const { firstname, email, password, lastname, gender, phone, languages, level, introduction } = req.body;
  try {
    const isExist = await Teacher.findOne({ email });
    if (isExist) {
      const err = new Error('This email is taken, please login instead');
      err.status(409);
      return next(err);
    }
    const teacher = await Teacher.create({ firstname, email, password: sha256(password), lastname, gender, phone, level, introduction });
    teacher.languages.push(languages);
    await teacher.save();
       res.status(200).json({ teacher });
  } catch(err) {
    console.log('error', err);
    next(err);
  }
}

const logout = (req, res, next) => {
}

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      const err = new Error('No teacher found');
      err.status(401);
      throw err;
    }
    if (sha256(password) === teacher.password) {
            res.status(200).json({ teacher });
    };
  } catch(err) { 
    next(err);
  }
}

module.exports = { signup, logout, login }
