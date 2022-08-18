const BookModel3 = require('../models/bookModel3')
const AuthorModel3 = require('../models/authorModel')

const createBook1 = async function(req, res) {
    let data = req.body
    let newdata = await BookModel3.create(data)
    res.send({ msg: newdata })
}
module.exports.createBook1 = createBook1


const createAuthor = async function(req, res) {
    let data = req.body
    let newdata = await AuthorModel3.create(data)
    res.send({ msg: newdata })
}
module.exports.createAuthor = createAuthor


//2nd question

const byAuthorId = async function(req, res) {
    let data = await AuthorModel3.find({ author_name: "Chetan Bhagat" })
    let book = await BookModel3.find({ author_id: { $eq: data[0].author_id } })
    res.send({ book })
}
module.exports.byAuthorId = byAuthorId


// 3rd question
const updateBook = async function(req, res) {
    let bookPrice = await BookModel3.findOneAndUpdate({ name: "Two states" }, { $set: { prices: 100 } }, { new: true });
    let newprice = bookPrice.prices;
    let authorupdate = await AuthorModel3.find({ author_id: { $eq: bookPrice.author_id } }).select({ author_name: 1, _id: 0 });
    res.send({ authorupdate, newprice })
}
module.exports.updateBook = updateBook;


//4th question 

const bookRange = async function(req, res) {
    let bookPricerange = await BookModel3.find({ prices: { $gte: 50, $lte: 100 } });
    let b = bookPricerange.map(x => x.author_id);
    let newbookPricerange = await AuthorModel3.find({ author_id: b }).select({ author_name: 1, _id: 0 });
    res.send({ newbookPricerange })
}

module.exports.bookRange = bookRange