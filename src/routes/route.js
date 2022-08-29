const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const Middleware = require("../middleware/auth")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser, Middleware.createtoken)

//The userId is sent by front end
router.get("/users/:userId", Middleware.Verifytoken, userController.getUserData)

// router.post("/users/:userId/posts", Middleware.Verifytoken, userController.postMessage)

router.put("/users/:userId", Middleware.Verifytoken, userController.updateUser)

router.delete('/users/:userId', Middleware.Verifytoken, userController.deleteUser)

module.exports = router;