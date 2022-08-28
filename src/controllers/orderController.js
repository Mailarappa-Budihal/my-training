// const { count } = require("console")
const OrderModel = require("../models/orderModel")
const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
    // const { findOneAndReplace } = require("../models/userModel")
    // const userModel = require("../models/userModel")
    // const productModel = require("../models/productModel")

const createOrder = async function(req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
        // checking the validity of id
    if (!userId)
        return res.send({ status: false, msg: "userId is invalid" })
    else if (!productId) {
        return res.send({ status: false, msg: "productId is invalid" })
    }
    // checking validity for function

    let UserId = await userModel.findById(userId)
    console.log(UserId)
    let ProductId = await productModel.findById(productId)

    if (!UserId) {
        return res.send({ status: false, msg: "this UserId is not exist" })
    } else if (!ProductId) {
        return res.send({ status: false, msg: "This productId not exist" })
    }
    let token = req.headers.isfreeappuser
    console.log(token)
    let store = 0
        // checking the condition for free app user True
    if (token === "true") {
        data.amount = store
        data.isFreeAppUser = token
        let createOrder = await OrderModel.create(data)
        res.send({ msg: createOrder })
    }
    //checking condition for freeAppuser False
    else if (UserId.balance >= ProductId.price) {
        await userModel.findOneAndUpdate({ _id: userId }, { $set: { balance: UserId.balance - ProductId.price } })
        data.amount = ProductId.price
        data.isFreeAppUser = token;


        let createOrder = await OrderModel.create(data)
        res.send({ msg: createOrder })
    } else {
        res.send({ msg: "Insufficient Balance" })
    }
}

module.exports.createOrder = createOrder






// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks = await BookModel.findOneAndUpdate(
//         { authorName: "ABC" }, //condition
//         { $set: data }, //update in data
//         { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true } ,
//     )

//     res.send({ msg: allBooks })
// }



// const totalSalesPerAuthor = async function (req, res) {
//     // let data = req.body 
//     let allAuthorSales = await BookModel.aggregate(
//         [
//             { $group: { _id: "$authorName", totalNumberOfSales: { $sum: "$sales" } } },
//             { $sort: { totalNumberOfSales: -1 } }
//         ]
//     )

//     res.send({ msg: allAuthorSales })
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook = createBook
// module.exports.getBooksData = getBooksData
// module.exports.updateBooks = updateBooks
// module.exports.deleteBooks = deleteBooks
// module.exports.totalSalesPerAuthor = totalSalesPerAuthor