const { signup, login, logout, createHomework } = require('../../controllers/teacher/teacher');

const express = require('express');
const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);

router.post('/add/homework', createHomework);


module.exports = router;
