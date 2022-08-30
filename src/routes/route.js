const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const Middleware = require("../middleware/auth")

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", Middleware.Verifytoken, Middleware.Authorisation, userController.getUserData)


// router.post("/users/:userId/posts", Middleware.Verifytoken, userController.postMessage)

router.put("/users/:userId", Middleware.Verifytoken, Middleware.Authorisation, userController.updateUser)

router.delete('/users/:userId', Middleware.Verifytoken, Middleware.Authorisation, userController.deleteUser)

module.exports = router;