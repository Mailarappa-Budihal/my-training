const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({

    bookName: String,
    authorName: String,
    category: String,
    year: Number,
    price: {
        indianRupee: String,
        euro: String,
    },
    sales: {
        type: Number,
        default: 20

    }


}, { timestamps: true });
module.exports = mongoose.model('book', bookSchema)