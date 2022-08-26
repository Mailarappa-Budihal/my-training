const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const authorSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "UserDocument"

    },
    productId: {
        type: ObjectId,
        ref: "productDocument"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
        // author_id : Number,
        // author_name: String,
        // age: Number,
        // address: String

}, { timestamps: true });

module.exports = mongoose.model('Product', authorSchema)