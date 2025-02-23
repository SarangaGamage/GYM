const mongoose = require('mongoose');
const myGymSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, required: true},
    phone_number: { type: String, required: true },
    password : {type: String, require: true}
});

module.exports = mongoose.model('MyGym', myGymSchema);