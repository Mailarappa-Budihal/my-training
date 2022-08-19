const mongoose = require('mongoose');

const newauthorSchema = new mongoose.Schema({
    authorName: String,
    age: Number,
    address: String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('newauthor', newauthorSchema)

// "62ff81ea16a51e325b965f06"
// 62ff840325696e2818c5e7a6"