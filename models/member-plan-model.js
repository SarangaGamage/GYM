const mongoose = require('mongoose');
const memberPlan = new mongoose.Schema({
    member_id : {type: String, require: true},
    plan_id : {type: String, required: true},
    start_date : { type: String, required: true },
    end_date : { type: String, required: true },
    amount : { type: String, required: true },
    plan_data: { type: String, required: true },
});

module.exports = mongoose.model('MemberPlan', memberPlan);