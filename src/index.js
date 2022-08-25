const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://mailarappabudihal:pOeBfKpx3Z0kvvLT@cluster0.dzuw7wb.mongodb.net/mailarappabudihal-DB?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))
    // 
    // <<<<<<< HEAD
    // const moment = require("moment")
    // const time = moment()
    // =======
    // app.use(
    //     function(req, res, next) {
    //         console.log("inside GLOBAL MW");
    //         next();
    //     }
    // );

// >>>>>>> 9e4c16d4ea1ae2e8bdde64eac93caf8467fd54bc
const moment = require("moment")
const time = moment()
app.use(
    function(req, res, next) {
        console.log("Global Middleware ")
        console.log(time.format("YYYY',MM,DD"))
        console.log(time.format("h:mm:ss"))
        console.log(req.ip)
        console.log(req.baseUrl)
        console.log("/basicRoute")
        next()
    }

)
app.use('/', route)

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});