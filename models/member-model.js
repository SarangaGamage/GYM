const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, required: true},
    gender: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    password: { type: String, required: true },
    birth_date: { type: String, required: true },
    status: { type: String, required: true },
    street_address : { type: String, required: true },

});

module.exports = mongoose.model('User', userSchema);