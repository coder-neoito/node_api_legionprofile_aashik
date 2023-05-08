const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const stats = new Schema({
    _id: ObjectId,
    playerId: String,
    allTimeStats: {}, //contains stats of all time
    seasonStats: [], //contain objects which represents each season stats
    createdat: Date,
    updatedat: Date
});

module.exports = mongoose.model('stats', stats);
