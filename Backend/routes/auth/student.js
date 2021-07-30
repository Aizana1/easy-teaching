const { signup, login, logout, homeworks, oneHomework } = require('../../controllers/student/student');

const express = require('express');
const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/logout', logout);

router.get('/homeworks', homeworks);

router.get('/homeworks/:id', oneHomework);


module.exports = router;
