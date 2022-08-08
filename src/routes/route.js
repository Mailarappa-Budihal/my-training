const express = require('express')
const router = express.Router();


// get api Assignment


// 1. St question
router.get('/get-movies',
    function(req, res) {
        let movies = ["vikrant rona", "james", "kgf", "kgf-2", ]
        res.send(movies)
    })
module.exports = router;

// 2 nd question
router.get('/movies/:indexNumber', function(req, res) {
    let movies = ["Rang de basanti", "the shining", "Lord of the rings", "Bats man begins"]
    let index = req.params.indexNumber;
    res.send(movies[index])

});
module.exports = router;



// 3 rd question
router.get('/movies/:indexNUmder', function(req, res) {
    let movies = ["Rang de basanti", "the shining", "Lord of the rings", "Bats man begins"]
    let index = req.params.indexNUmder;
    if (index > movies.length) {
        return res.send("use the valid index")
    } else {
        res.send(movies[index])
    }
})
module.exports = router;


// 4th question
router.get('/get-films', function(req, res) {
    let array = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "ncendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]
    res.send(array)
})
module.exports = router;


// 5th question
router.get('/get-films/:filmId', function(req, res) {
    let array = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "ncendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]

    let index = req.params.filmId;
    if (index > array.length) {
        res.send("no movie exist with this Id")
    } else {
        res.send(array[index])

    }
})
module.exports = router