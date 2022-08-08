const express = require('express');
const lodash = require("lodash")
const one = require('../logger/logger')
const Two = require('../util/helper')
const Three = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function(req, res) {
    one.Welcome()
    Two.printDate()
    Three.Mailarappa()

    1.
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let newmonths = lodash.chunk(months, 3);
    console.log('this is the output of lodash', newmonths)

    2.
    let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let newOddNumbers = lodash.tail(oddNumbers)
    console.log('this is tail function result', newOddNumbers)

    3.
    let mahesh = [1, 2, 2, 3]
    manu = [2, 2, 4]
    mantu = [3, 4, 5, 3, 6, 7]
    kartik = [3, 3, 1, 2, 7]
    manju = [3, 3, 5, 7, 8]
    let newone = lodash.union(mahesh, manu, mantu, kartik, manju)
    console.log("this is output of union function", newone)

    4.
    let mallu = [
        ["horror", "The Shining"],
        ["dream", "Titanic"],
        ["thriller", "Shutter Island"],
        ["fantasy", "Pans Labyrinth "]
    ]
    let new2 = lodash.fromPairs(mallu)
    console.log("this is output of from pairs function", new2)


    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason