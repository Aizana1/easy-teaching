const { Router } = require("express");
const router = Router();
const testModel = require('../models/testModel');
const Teacher  = require('../models/teacher.model');
const Student = require('../models/student.model');

router.post('/add/test/title', async(req, res) => {
  try {
    const { title } = req.body.values;
    const { email } = req.body;
    const test = new testModel({ title, author: email });
    await test.save();
    res.json({ test });
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/add/test', async(req, res) => {
  try {
       const { question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer } = req.body.values.values;
    const { id } = req.body.values;
    const oneTest = { question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer };  
    const test = await testModel.findById(id);
    test.test.push(oneTest);
    await test.save();
    res.json(test);;
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/showtests', async (req, res) => {
  const { email } = req.body;
  const test = await testModel.find({ author: email }).lean();
  res.json({ test });
})

router.post('/showteachers', async (req, res) => {
  const { id } = req.body;

  const teachers = await Teacher.find({ 'students.id': id });
  res.json({ teachers });
})

router.get('/allteacher', async(req, res) => {
  const allTeachers = await Teacher.find().lean();
  res.json(allTeachers)
})

router.post('/choice', async (req, res) => {
  const { id, studentId } = req.body;
  const teachers = await Teacher.findById(id);
  for (let i = 0; i < teachers.students.length; i++) {
    if (teachers.students[i].id == studentId) {
      return res.send('Вы уже обучаетесь у этого преподавателя')
    }
  };
  teachers.students.push({id: studentId});
  await teachers.save();
  res.json(teachers)
})

router.post('/showstudents', async (req, res) => {
  const { id } = req.body;
  const teachers = await Teacher.findById(id);
  const studentsId = teachers.students.map((el)=> el.id);
  let students = [];
  for (let i=0; i<studentsId.length; i++) {
    let oneStudent = await Student.findById(studentsId[i]);

    if (oneStudent) {
      students.push(oneStudent)
    }
  }
  students.flat(Infinity);
  res.json({ students });
})

router.post('/addstudent', async (req, res) => {
  const { testId, studId } = req.body;
  const test = await testModel.findById(testId);
  const student = await Student.findById(studId);
  test.students.push(student);
  test.save();
  res.status(200);
})

router.post('/mytests', async (req, res) => {
  const { id } = req.body;
  
  let testarr = await testModel.find();
  test = [];
  for (let i=0; i<testarr.length; i++) {
    let one = testarr[i].students.map((obj) => obj._id);
    if (one.length) {
      test.push(testarr[i]);
    }
  }
  res.json({ test });
})

module.exports = router;
