const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const userModel = require("../models/userModel");

// Token Verification
const Verifytoken = function(req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        //If no token is present in the request header return error. This means the user is not logged in.
        if (!token)
            return res
                .status(401)
                .send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "functionup-plutonium-batch-2");
        if (!decodedToken)
            return res
                .status(400)
                .send({
                    status: false,
                    msg: "token is invalid and length is not correct",
                });

        next();
    } catch (error) {
        res.status(500).send({ msg: "server issues", error: error.message });
    }
};


let Authorisation = function(req, res, next) {
    try {
        let token = req.headers["x-auth-token"];
        //If no token is present in the request header return error. This means the user is not logged in.
        if (!token)
            return res
                .status(401)
                .send({ status: false, msg: "token must be present" });
        let decodedToken = jwt.verify(token, "functionup-plutonium-batch-2");
        if (!decodedToken)
            return res.status(400).send({ status: false, msg: "token is invalid" });
        //Authorisation
        let userToBeModified = req.params.userId;
        let isValid = mongoose.Types.ObjectId.isValid(userToBeModified);
        if (!isValid)
            return res.status(401).send("length of the id is less than 24 digits");
        // userId for the logged-in user
        let userLoggedIn = decodedToken.userId;
        if (userToBeModified != userLoggedIn)
            return res
                .status(403)
                .send({
                    status: false,
                    msg: "User logged is not allowed to modify the requested users data",
                });
        else {
            next();
        }
    } catch (error) {
        res.status(500).send({ msg: "server error", error: error.message });
    }
};

// module.exports.createtoken = createtoken
module.exports.Verifytoken = Verifytoken;
module.exports.Authorisation = Authorisation;