const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createtoken = async function(req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
        return res.send({
            status: false,
            msg: "username or the password is not corerct",
        });
    let token = jwt.sign({
            userId: user._id.toString(),
            batch: "plutonium",
            organisation: "FunctionUp",
        },
        "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
}

// Token Verification
const Verifytoken = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token) return res.send({ status: false, msg: "token must be present" });

    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" });
    } else {
        next()
    }
}



module.exports.createtoken = createtoken
module.exports.Verifytoken = Verifytoken