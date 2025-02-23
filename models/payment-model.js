const mongoose = require('mongoose');
const payments = new mongoose.Schema({
    member_id : {type: String, require: true},
    month : {type: String, required: true},
    amount : { type: String, required: true },
    payment_date: { type: String, required: true },
    payment_status: { type: String, required: true }
});

module.exports = mongoose.model('Payments', payments);