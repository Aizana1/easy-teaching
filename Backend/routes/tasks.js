const { Router } = require("express");
const router = Router();
const testModel = require('../models/testModel');
const Teacher  = require('../models/teacher.model');

router.post('/add/test/title', async(req, res) => {
  try {
    console.log('Зашел в добавление title');
    console.log(req.body);
    const { title } = req.body.values;
    const { email } = req.body;
    const test = new testModel({ title, author: email });
    await test.save();
    res.json({ test });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/add/test', async(req, res) => {
  try {
    console.log('Зашел в добавление теста');
    console.log(req.body);
    console.log('После лога на req.body');
    const { question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer } = req.body.values.values;
    const { id } = req.body.values;
    // const test = await testModel.findByIdAndUpdate(id, {})
    const oneTest = { question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer };  
    // const student = 'Vova';
    const test = await testModel.findById(id);
    test.test.push(oneTest);
    // test.students.push(student);
    await test.save();


    // const test = new testModel({ title: id, question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer, author: 'Rocky' });
    // await test.save();
    console.log(test);
    res.json(test);;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post('/showtests', async (req, res) => {
  const { email } = req.body;
  const test = await testModel.find({ author: email }).lean();
  res.json({ test });
})

router.post('/showteachers', async (req, res) => {
  console.log('req.body: ', req.body);
  const { id } = req.body;

  const teachers = await Teacher.find({ 'students.id': id });
  console.log('Учитель', teachers);
  res.json({ teachers });
})

router.get('/allteacher', async(req, res) => {
  const allTeachers = await Teacher.find().lean();
  // const lang = await Teacher.find(languages.length)
  // console.log(allTeachers);
  console.log(allTeachers.languages);
})


module.exports = router;
