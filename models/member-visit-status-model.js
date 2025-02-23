const mongoose = require('mongoose');
const memberVisitStatusSchema = new mongoose.Schema({
    member_id: {type: String, require: true},
    chekin_time: {type: String, required: true},
    chekout_time: { type: String, required: true },
    stay_duration: { type: String, required: true },
});

module.exports = mongoose.model('memberVisitStatus', memberVisitStatusSchema);