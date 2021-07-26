const { Schema, model } = require('mongoose');

const studentSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: String,
    languages: [String],
    level: String,
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }]
  },
  
);

module.exports = model('Student', studentSchema);
