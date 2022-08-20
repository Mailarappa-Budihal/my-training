// const authorModel = require("../models/authorModel")
// const bookModel = require("../models/bookModel")
// const newBookModel = require("../models/bookModel")
// const newAuthorModel = require("../models/authorModel")
// const newPublisherModel = require("../models/publisherModel")
// const newBookModel = require("../models/bookModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const authorModel = require("../models/authorModel")

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

// const newBook = async function(req, res) {
//     let newBookdata = req.body
//     let newBookCreated = await bookModel.create(newBookdata)
//     res.send({ data: newBookCreated })
// }
// module.exports.newBook = newBook


// 3rd question
const createBook = async function(req, res) {
    let book = req.body
    let author1 = book.author
    let publisher1 = book.publisher
        //a
    if (!author1) res.send({ msg: "author id must be present to save data" })

    //b
    else if (!await authorModel.findOne({ _id: author1 }))
        res.send({ msg: "the author is not present for this id" })
        //c 
    else if (!publisher1) res.send({ msg: " publisher id must be present to save data" })


    // else if (!await authorModel.findOne({ _id: author1 }))
    //     res.send({ msg: "the author is not present for this id" })

    //d
    else if (!await publisherModel.findOne({ _id: publisher1 }))
        res.send({ msg: "the publisher is not present with id" })
    else {
        let createBook = await bookModel.create(book)
        res.send({ data: createBook })
    }
}
module.exports.createBook = createBook
    // if(!author1){
    //     return res.send({ msg : "author id is required"})
    // }

// let author2= await authorModel.findById(author1)
// if(!author1){
//     return res.send({ msg :'No author is present with the given id'})
// }

// if(!publisher1){
//     return res.send({ msg :'publisher id is required'})
// }

// let publisher2 = await publisherModel.findById(publisher1)
// if(!publisher1){
//     return res.send({msg :'No publisher is present with the given id'})
// }
// let bookCreated = await bookModel.create(book)
// return res.send({data: bookCreated  })}
// module.exports.createBook =createBook




//4th question
const findBook = async function(req, res) {
    let findBook = await bookModel.find().populate('author').populate('publisher')
    res.send({ data: findBook })
}
module.exports.findBook = findBook



// 5th question 
//a.
const getBooksUpdated = async function(req, res) {
    let data1 = await publisherModel.find({ name: ["penguin", "HarperCollins"] }).select({ _id: 1 })
    let data2 = await bookModel.updateMany({ publisher: data1 }, { isHardCover: true }, { new: true })
    res.send({ msg: data2 })


}
module.exports.getBooksUpdated = getBooksUpdated



//b question
const priceUpdate = async function(req, res) {
    let updateprice = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let updateprice1 = await bookModel.updateMany({ author: updateprice }, { $inc: { price: +10 } }, { new: true })
    res.send({ msg: updateprice1 })
}
module.exports.priceUpdate = priceUpdate

const allbooksupdated = async function(req, res) {
    let allbooks = await bookModel.find().populate("author").populate("publisher")
    res.send({ data: allbooks })
}
module.exports.allbooks = allbooksupdated