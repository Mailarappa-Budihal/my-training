const mongoose = require("mongoose")

const bookSchema2 = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    price: {
        indianPrices: String,
        euroPrices: String,
    },
    year: {
        type: Number,
        default: 2021,
    },
    tags: [String],
    authorName: String,
    stockAvailable: Boolean,
    totalPages: Number,

}, { timestamps: true });
module.exports = mongoose.model('book2', bookSchema2)