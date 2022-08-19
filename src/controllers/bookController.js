// const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")
// const newBookModel = require("../models/bookModel")
const newAuthorModel = require("../models/authorModel")
const newPublisherModel = require("../models/publisherModel")
const newBookModel = require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

const newBook = async function(req, res) {
    let newBookdata = req.body
    let newBookCreated = await newBookModel.create(newBookdata)
    res.send({ data: newBookCreated })
}
module.exports.newBook = newBook


const findBook = async function(req, res) {
    let findBook = await newBookModel.find().populate('author').populate('publisher')
    res.send({ data: findBook })
}
module.exports.findBook = findBook