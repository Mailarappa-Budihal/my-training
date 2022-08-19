// const newAuthorModel = require("../models/authorModel")
const newPublisherModel = require("../models/publisherModel")
    // const newBookModel = require("../models/bookModel")



const newPublisher = async function(req, res) {
    let Publisher = req.body
    let bookCreated = await newPublisherModel.create(Publisher)
    res.send({ data: bookCreated })
}
module.exports.newPublisher = newPublisher