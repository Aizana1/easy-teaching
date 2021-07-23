const { Router } = require("express");
const router = Router();
const testModel = require('../models/testModel');

router.post('/add/test/title', async(req, res) => {
  try {
    console.log('Зашел в добавление title');
    console.log(req.body);
    const { title } =req.body.values;
    const test = new testModel({ title, author: 'Rocky' });
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
    console.log(question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer, id);
    const test = testModel.findByIdAndUpdate(id, {})
    // const test = new testModel({ title: id, question_text, posAns1, posAns2, posAns3, posAns4, trueAnswer, author: 'Rocky' });
    await test.save();
    console.log(test);
    res.json(test);;
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


module.exports = router;
