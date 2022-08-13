const UserModel = require("../models/userModel")
    // const createUser = async function(req, res) {
    //     let data = req.body
    //     let Savedata = await UserModel.create(data)
    //     res.send({ data: Savedata })
    // }

// const getUser = async function(req, res) {
//     let allUsers = await userModel.find()
//     res.send({ data: allUsers })
// }


const newbook = async function(req, res) {
    let data = req.body
    let newdata = await UserModel.create(data)
    res.send({ msg: newdata })
}

const listOfBooks = async function(req, res) {
    let listOfBooks = await UserModel.find()
    res.send({ msg: listOfBooks })
}


// module.exports.createUser = createUser
// module.exports.getUser = getUser
module.exports.newbook = newbook
module.exports.listOfBooks = listOfBooks