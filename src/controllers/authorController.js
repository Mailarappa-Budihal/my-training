const AuthorModel = require("../models/authorModel")

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData

const newAuthor = async function(req, res) {
    let Author = req.body
    let authorCreated = await AuthorModel.create(Author)
    res.send({ data: authorCreated })
}
module.exports.newAuthor = newAuthor