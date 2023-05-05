const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const profiles = new Schema({
  _id : ObjectId,
  name: String,
  title: String,
  lastDate: Date,
  type: String,
  profilepicURL : String,
});

module.exports = mongoose.model('profiles', profiles);
