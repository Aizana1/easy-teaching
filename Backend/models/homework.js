const { Schema, model } = require('mongoose');

const homeworkSchema = new Schema(
  {
    title: String,
    cards: [],
    sentences: [],
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
    student: { type: Schema.Types.ObjectId, ref: 'Student'},
    // что то будешь еще
  },
);

module.exports = model('Homework', homeworkSchema);
