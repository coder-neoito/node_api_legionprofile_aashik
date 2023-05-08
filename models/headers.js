const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const header = new Schema({
  _id : ObjectId,
  name: String,
  email: String,
  title: String,
  lastDate: Date,
  type: String,
  createdat : Date,
  updatedat : Date
});

module.exports = mongoose.model('headers', header);
