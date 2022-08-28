const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
//1st question 
const createUser = async function(abcd, xyz) {
    //You can name the req, res objects anything.
    //but the first parameter is always the request 
    //the second parameter is always the response
    let data = abcd.body;
    let savedData = await userModel.create(data);
    console.log(abcd.newAtribute);
    xyz.send({ msg: savedData });
};


// 2nd question 
const loginUser = async function(req, res, next) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
        return res.send({
            status: false,
            msg: "username or the password is not corerct",
        });
    next()
}

// // Once the login is successful, create the jwt token with sign function
// // Sign function has 2 inputs:
// // Input 1 is the payload or the object containing data to be set in token
// // The decision about what data to put in token depends on the business requirement
// // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
// // The same secret will be used to decode tokens 
// let token = jwt.sign({
//         userId: user._id.toString(),
//         batch: "plutonium",
//         organisation: "FunctionUp",
//     },
//     "functionup-plutonium-very-very-secret-key"
// );
//     res.setHeader("x-auth-token", token);
// res.send({ status: true, token: token });



// 3rd question 
const getUserData = async function(req, res) {
    // let token = req.headers["x-Auth-token"];
    // if (!token) token = req.headers["x-auth-token"];

    // //If no token is present in the request header return error. This means the user is not logged in.
    // if (!token) return res.send({ status: false, msg: "token must be present" });

    // console.log(token);

    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself

    // Decoding requires the secret again. 
    // A token can only be decoded successfully if the same secret was used to create(sign) that token.
    // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
    // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    // if (!decodedToken)
    //     return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
        return res.send({ status: false, msg: "No such user exists" });
    } else if (userDetails.isDelete == true) {
        return res.send("this user is deleted from our database")
    } else {
        res.send({ status: true, data: userDetails });
    }
    // Note: Try to see what happens if we change the secret while decoding the token
};

// 4th question 
const updateUser = async function(req, res) {
    // Do the same steps here:
    // Check if the token is present
    // let token = req.headers["x-Auth-token"];
    // if (!token) 
    // let token = req.headers["x-auth-token"];
    // if (!token) return res.send({ status: false, msg: "token must be present" });

    // console.log(token);
    // // Check if the token present is a valid token
    // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    // if (!decodedToken)
    //     return res.send({ status: false, msg: "token is invalid" });



    // Return a different error message in both these cases

    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
        return res.send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { mobile: 9535109736 }, { new: true });
    res.send({ status: updatedUser, data: updatedUser });
};


// 5th question
const deletekey = async function(req, res) {
    // token is present 
    // let token = req.headers["x-auth-token"];
    // if (!token) return res.send({ status: false, msg: "token must be present" });
    // console.log(token);
    // // decode the token validate it

    // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    // if (!decodedToken)
    //     return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
        return res.send("No such user exists");
    }
    let userData = req.body;
    let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true });
    res.send({ msg: "user deleted successfully", data: deleteUser });

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletekey = deletekey