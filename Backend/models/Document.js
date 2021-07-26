const { Schema, model } = require("mongoose")

const Document = new Schema({
  _id: String,
  data: Object,
  author: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }]

})

module.exports = model("Document", Document)
