const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// 1st Question
const createUser = async function(abcd, xyz) {
    try {
        let data = abcd.body;
        if (Object.keys(data).length != 0) {
            let savedData = await userModel.create(data);
            // console.log(abcd.newAtribute);
            xyz.status(201).send({ status: true, msg: savedData });
        } else {
            xyz.status(400).send({ status: false, msg: "bad request" });
        }
    } catch (err) {
        xyz.status(500).send({ msg: "server side issue" });
    }
};

// 2nd question
const loginUser = async function(req, res) {
    // createtoken
    try {
        let userName = req.body.emailId;
        let password = req.body.password;
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(404).send({
                status: false,
                msg: "username or the password is not corerct",
            });
        let payload = {
            userId: user._id.toString(),
            mobile: "9535109736",
            organisation: "Function-up"
        }
        let token = jwt.sign(payload,
            "functionup-plutonium-batch-2"
        );
        res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, token: token });
    } catch (error) { res.status(500).send({ msg: "token is invalid and server issue" }) }
}


// let userName = req.body.emailId;
// let password = req.body.password;
// let user = await userModel.findOne({ emailId: userName, password: password });
// if (!user)
//     return res.send({
//         status: false,
//         msg: "username or the password is not corerct",
//     });

// // Once the login is successful, create the jwt token with sign function
// // Sign function has 2 inputs:
// // Input 1 is the payload or the object containing data to be set in token
// // The decision about what data to put in token depends on the business requirement
// // Input 2 is the secret
// // The same secret will be used to decode tokens
// let payload = {
//     userId: user._id.toString(),
//     batch: "radium",
//     organisation: "FUnctionUp-2",
// }
// let token = jwt.sign(payload,
//     "functionup-plutonium-2"
// );
// // res.setHeader("x-auth-token", token);
// res.send({ status: true, data: token });

//3rd question
const getUserData = async function(req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails) {
            return res
                .status(404)
                .send({ status: false, msg: "No such user exists" });
        } else if (userDetails.isDelete == true) {
            return res
                .status(404)
                .send({ status: false, msg: "this user is already deleted" });
        } else {
            res.status(200).send({ status: true, data: userDetails });
        }
    } catch (err) {
        xyz.status(500).send({
            msg: "server side issue",
        });
    }
};

//4th question
const updateUser = async function(req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        //Return an error if no user with the given id exists in the db
        if (!user) {
            return res.status(404).send("No such user exists");
        } else if (user.isDelete == true) {
            return res
                .status(404)
                .send({ status: false, msg: "this user is already deleted" });
        } else {
            let userData = req.body;
            let updatedUser = await userModel.findOneAndUpdate({ _id: userId },
                userData
            );
            res.status(200).send({ status: updatedUser, data: updatedUser });
        }
    } catch (error) {
        res.status(500).send({
            msg: "server side issue",
        });
    }
};

//5th question
const deleteUser = async function(req, res) {
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).send("No such user exists");
        } else if (user.isDelete == true) {
            return res.status(404).send("this user is already deleted");
        } else {
            let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDelete: true } }, { new: true });
            res
                .status(200)
                .send({ msg: "user deleted successfully", data: deleteUser });
        }
    } catch (err) {}
    res.status(500).send({
        msg: "server side issue",
    });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;