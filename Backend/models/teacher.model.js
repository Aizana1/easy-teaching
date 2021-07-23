const { Schema, model } = require('mongoose');

const teacherSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: String,
    languages: [String],
    lessons: [Object],
    level: String,
    gender: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    introduction: String,
  },
);

module.exports = model('Teacher', teacherSchema);
