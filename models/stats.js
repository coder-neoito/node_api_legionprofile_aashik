const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const stats = new Schema({
    _id: ObjectId,
    playerID: String,
    allTimeStats: {}, //contains stats of all time
    seasonStats: [] //contain objects which represents each season stats
});

module.exports = mongoose.model('stats', stats);
