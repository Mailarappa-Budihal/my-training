const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true,
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         Enumerator: ["Male", "female", "LGBTQ"]
//     },
//     age: Number,

// }, { timestamps: true });
// module.exports = mongoose.model('user', userSchema)



const bookSchema = new mongoose.Schema({

    bookName: String,
    authorName: String,
    category: String,
    year: Number,

}, { timestamps: true });
module.exports = mongoose.model('book', bookSchema)