const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        required: true
    },
    sexe: {
        type: Number,
        min: 0,
        max: 1,
        required: true
    }
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel