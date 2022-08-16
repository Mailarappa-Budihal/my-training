const Bookmodel = require('../models/bookModel')


const newbook = async function(req, res) {
    let data = req.body
    let newdata = await Bookmodel.create(data)
    res.send({ msg: newdata })
}

const listOfBooks = async function(req, res) {
    let listOfBooks = await Bookmodel.find({ authorName: "Robert kiosaki", year: 1996 })
    res.send({ msg: listOfBooks })
}
sync function(req, res) {
    let listOfBooks = await Bookmodel.find({
        $or:[{ authorName: "Robert kiosaki", year: 1996 }]
    res.send({ msg: listOfBooks })

// module.exports.createUser = createUser
// module.exports.getUser = getUser
module.exports.newbook = newbook
module.exports.listOfBooks = listOfBooks