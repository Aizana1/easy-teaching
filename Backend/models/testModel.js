const mongoose = require('mongoose');
const Schema = require('mongoose');

const testSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  author: String,
  students: Array,
  test: [{
    question_text: String,
    posAns1: String,
    posAns2: String,
    posAns3: String,
    posAns4: String,
    trueAnswer: String,
    students: Array,
  }]
},
{
  timestamps: true,
})


const TestModel = mongoose.model('Test', testSchema);
module.exports = TestModel;


