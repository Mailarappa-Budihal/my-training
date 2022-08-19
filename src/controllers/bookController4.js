const BookModel4 = require('../models/bookModel4')
const AuthorModel4 = require('../models/authorModel')


const createAuthor4 = async function(req, res) {
    let data = req.body
    let newdata = await AuthorModel4.create(data)
    res.send({ msg: newdata })
}
module.exports.createAuthor4 = createAuthor4



const createBook4 = async function(req, res) {
    let data = req.body
    let newdata = await BookModel4.create(data)
    res.send({ msg: newdata })
}
module.exports.createBook4 = createBook4


const findBook = async function(req, res) {
    let findBook = await BookModel4.find().populate("author_id")
    res.send({ msg: findBook })
}
module.exports.findBook = findBook