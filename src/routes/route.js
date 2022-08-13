const express = require('express');

const router = express.Router();
const UserModel = require('../models/userModel.js');
// const UserModel = require("../models/userModel")
const UserController = require("../controllers/userController");


// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random", function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api", function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2", function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3", function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4", function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5", function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6", function(req, res) {
//     res.send({ a: 56, b: 45 })
// })

// router.post("/test-post", function(req, res) {
//     res.send([23, 45, 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send({ msg: "hi", status: true })
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log(req.body)

//     res.send({ msg: "hi", status: true })
// })



// router.post("/test-post-4", function(req, res) {
//     let arr = [12, "functionup"]
//     let ele = req.body.element
//     arr.push(ele)
//     res.send({ msg: arr, status: true })
// })

// module.exports = router;




// // Assignment 10th august 1st question



// let players = [{
//         "name": "manish",
//         "dob": "1/1/1995",
//         "gender": "male",
//         "city": "jalandhar",
//         "sports": [
//             "swimming"
//         ]
//     },
//     {
//         "name": "gopal",
//         "dob": "1/09/1995",
//         "gender": "male",
//         "city": "delhi",
//         "sports": [
//             "soccer"
//         ]
//     },
//     {
//         "name": "lokesh",
//         "dob": "1/1/1990",
//         "gender": "male",
//         "city": "mumbai",
//         "sports": [
//             "soccer"
//         ]
//     },
// ]


// router.post('/players', function(req, res) {
//     let newPlayer = req.body
//         // console.log(newPlayer)
//     let newPlayerName = newPlayer.name
//         // console.log(newPlayerName)
//     let isNameRepeated = false
//         // console.log(isNameRepeated)

//     for (i = 0; i < players.length; i++) {
//         if (players[i].name == newPlayer.name) {
//             isNameRepeated = true;
//             break;
//         }
//     }
//     if (isNameRepeated) {
//         res.send("This player already exist")
//     } else {
//         players.push(newPlayer)
//         console.log(players)
//         res.send(players)
//     }
// });

// module.exports = router;

// router.post("/players", function(req, res) {
//     let newPlayer = req.body
//     for (let i = 0; i < players.length; i++) {
//         let arr = players[i]
//         if (newPlayer.name == newPlayer) {
//             return res.send("This player is already exist")
//         }
//     }
//     players.push(newPlayer)
//     res.send({ data: players, status: true });


// })
// module.exports = router




// //  Problem of post-api ,12th August problem
// // voting problem Solution
// let persons = [{
//         name: "PK",
//         age: 10,
//         votingstatus: false
//     },
//     {
//         name: "Sk",
//         age: 20,
//         votingstatus: false
//     },
//     {
//         name: "AA",
//         age: 70,
//         votingstatus: false
//     },
//     {
//         name: "SC",
//         age: 5,
//         votingstatus: false
//     },
//     {
//         name: "HQ",
//         age: 40,
//         votingstatus: false
//     }
// ]

// router.post('/persons', function(req, res) {

//     let votingAge = req.query.votingAge
//     let result = []

//     for (let i = 0; i < persons.length; i++) {
//         id = persons[i]
//         if (id.age >= 18 && votingAge >= 18) {
//             id.votingstatus = true
//             result.push(id)
//         }
//         if (id.age < 18 && votingAge < 18) {
//             res.send("your not eligible")
//         }

//     }
//     return res.send({ data: result, status: true })
// })
// module.exports = router;




// router.post('/createUser', async function(req, res) {
//     let data = req.body
//     let Savedata = await UserModel.create(data)
//     res.send({ data: Savedata })
// })
// module.exports = router;
// router.post('/getUser', async function(req, res) {
//     let allUsers = await userModel.find()
//     res.send({ data: allUsers })
// })
// module.exports = router
// router.post('/createUser', UserController.createUser)

// router.post('/getUser', UserController.getUser)
// module.exports = router;


router.post('/newbook', UserController.newbook)
    // async function(req, res) {
    //         let data = req.body
    //         let newdata = await UserModel.create(data)
    //         res.send({ msg: newdata })
    //     })
    // UserController.newbook)
    //     let data = req.body
    //     let newdata = await userModel.create(data)
    //     res.send({ msg: newdata })
    // });
module.exports = router;


router.get('/listOfBooks', UserController.listOfBooks)
    //  async function(req, res) {
    //     let listOfBooks = await UserModel.find()
    //     res.send({ msg: listOfBooks })
    // })
module.exports = router;