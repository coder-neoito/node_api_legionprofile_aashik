const mongoose = require("mongoose");
const { Schema } = mongoose;
var ObjectId = mongoose.Schema.Types.ObjectId;
const rolesOpening = new Schema({
    _id: ObjectId,
    playerId: String,
    roles: {}, //roles with thier counts  eg : {attacker : 71, defender : 52}
    openings: {} //roles with thier counts  eg : {openrole1 : 44, openrole2 : 41}
});

module.exports = mongoose.model('rolesOpening', rolesOpening);
