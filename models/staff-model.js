const mongoose = require('mongoose');
const staffSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, required: true},
    phone_number: { type: String, required: true },
    password : {type: String, require: true},
    designation: { type: String, required: true },
});

module.exports = mongoose.model('GymStaff', staffSchema);