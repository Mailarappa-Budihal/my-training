// const { count } = require("console")
const ProductModel = require("../models/productModel")

const createproduct = async function(req, res) {
    let data = req.body
    let createproduct = await ProductModel.create(data)
    res.send({ data: createproduct })
}
module.exports.createproduct = createproduct
    //     if (!authorId) return res.send({ msg: 'AuthorId is mandatory in the request' })

//     let savedData = await authorModel.create(data)
//     res.send({ data: savedData })
// }

// module.exports.createAuthor = createAuthor