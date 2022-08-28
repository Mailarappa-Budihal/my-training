const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const CommonMw = require("../Middlewares/auth")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser, CommonMw.createtoken)

//The userId is sent by front end
router.get("/users/:userId", CommonMw.Verifytoken, userController.getUserData)

router.put("/users/:userId", CommonMw.Verifytoken, userController.updateUser)

router.delete("/users/:userId", CommonMw.Verifytoken, userController.deletekey)

module.exports = router;