const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
// const BookController2 = require('../controllers/bookController2')
// const BookModel2 = require("../models/bookModel2");

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// module.exports = router;


// router.post('/createBook2', BookController2.createBook2)
// module.exports = router;

// router.get('/bookList', BookController2.BookData)
// module.exports = router;

// router.get('/bookList1', BookController2.BookData2)
// module.exports = router;


// router.post('/BooksInYear', BookController2.getBooksInYear)
// module.exports = router;

// router.post('/PerticularBooks', BookController2.getPerticularBooks)
// module.exports = router;

// router.get('/getXINRBooks', BookController2.getXINRBooks)
// module.exports = router;

// router.get('/getRandomBooks', BookController2.getRandomBooks)
// module.exports = router;

// router.post('/updateBook', BookController2.updateBook)
// module.exports = router;


//Assignment 18-08-2022
// const BookModel3 = require('../models/bookModel3')
// const AuthorModel3 = require('../models/authorModel')
// const BookModule3 = require('../models/bookModel3')
// const AuthorModel2 = require('../models/authorModel')
// const BookController3 = require('../controllers/bookController3')



// router.post('/createBook1', BookController3.createBook1)
// module.exports = router;

// router.post('/createAuthor', BookController3.createAuthor)
// module.exports = router;

// router.get('/byAuthorId', BookController3.byAuthorId)
// module.exports = router;

// router.get('/updateBook', BookController3.updateBook)
// module.exports = router;

// router.get('/bookRange', BookController3.bookRange)
// module.exports = router;


const BookModel4 = require('../models/bookModel4')
const AuthorModel4 = require('../models/authorModel')
const BookController4 = require('../controllers/bookController4')

router.post("/createAuthor4", BookController4.createAuthor4)
module.exports = router

router.post("/createbook4", BookController4.createBook4)
module.exports = router

router.get("/findBook", BookController4.findBook)
module.exports = router