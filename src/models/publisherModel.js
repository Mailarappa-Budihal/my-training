const mongoose = require('mongoose');

const newPublisherSchema = new mongoose.Schema({
    name: String,
    headQuarter: String


}, { timestamps: true });

module.exports = mongoose.model('newPublisher', newPublisherSchema)

// "62ff82a810fbf9232ef7948b"
// "62ff8435f4aa15623149472b"