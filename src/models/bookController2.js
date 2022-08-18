const BookModel2 = require("../models/bookModel2");
//1st question 
const createBook2 = async function(req, res) {
    let data = req.body
    let newdata = await BookModel2.create(data)
    res.send({ msg: newdata })
}
module.exports.createBook2 = createBook2

// 2nd question
const BookData = async function(req, res) {
    let bookList = await BookModel2.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: bookList })

}
module.exports.BookData = BookData


// 3rd question
const getBooksInYear = async function(req, res) {
    let newYear = req.query.year
    let bookList1 = await BookModel2.find({ year: newYear })
    res.send({ msg: bookList1 })
}

module.exports.getBooksInYear = getBooksInYear

// 4th question

const getPerticularBooks = async function(req, res) {
    let getPerticularBooks = await BookModel2.find(req.body)
    res.send({ msg: getPerticularBooks })
}
module.exports.getPerticularBooks = getPerticularBooks

// 5th question

const getXINRBooks = async function(req, res) {
    let indianBooks = await BookModel2.find({
        "price.indianPrices": { $in: ["100", "200", "500"] }
    })
    res.send({ msg: indianBooks })
}
module.exports.getXINRBooks = getXINRBooks


// 6th question
const getRandomBooks = async function(req, res) {
    let randomBooks = await BookModel2.find({
        $or: [{ stockAvailable: { $eq: true } }, { totalPages: { $gt: 500 } }]
    })
    res.send({ msg: randomBooks })
}
module.exports.getRandomBooks = getRandomBooks