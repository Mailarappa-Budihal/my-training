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

app.use('/', route);


app.listen(process.env.PORT || 3003, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3003))
});