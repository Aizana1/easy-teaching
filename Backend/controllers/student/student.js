require('dotenv').config()
const sha256 = require('sha256')
const Student = require('../../models/student.model')
const jwt = require('jsonwebtoken')

const signup = async (req, res, next) => {
  const {
    firstName,
    email,
    password,
    lastName,
    phone,
    languages,
    level,
  } = req.body
  try {
    const isExist = await Student.findOne({ email })
    if (isExist) {
      return res
        .status(409)
        .json({ error: 'This email is taken, please login instead' })
    }
    const student = await Student.create({
      firstName,
      email,
      password: sha256(password),
      lastName,
      phone,
      level,
    })
    await student.languages.push(languages)
    await student.save()
    res.status(200).json({ student })
  } catch (err) {
    next(err)
  }
}

const logout = (req, res, next) => {
}

const login = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const student = await Student.findOne({ email })
    if (!student) {
      const err = new Error('No student found')
      err.status(401)
      return next(err)
    }
    if (student.password === sha256(password)) {
      res.status(200).json({ student })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { signup, logout, login }
