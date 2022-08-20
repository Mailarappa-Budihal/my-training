const express = require('express');
const router = express.Router();

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// module.exports = router;

const newAuthorModel = require("../models/authorModel")
const AuthorController = require("../controllers/authorController")
const newPublisherModel = require("../models/publisherModel")
const PublisherController = require("../controllers/publisherController")
const newBookModel = require("../models/bookModel")
const BookController = require("../controllers/bookController")

router.post("/newAuthor", AuthorController.newAuthor)
router.post("/newPublisher", PublisherController.newPublisher)
router.post("/newBook", BookController.createBook)
router.get("/findBook", BookController.findBook)
router.put("/books", BookController.getBooksUpdated)
router.put("/books1", BookController.priceUpdate)
    // router.get("/allbooksupdated", BookController.allbook)

module.exports = router