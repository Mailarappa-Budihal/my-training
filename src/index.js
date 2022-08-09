const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

/ / / / / / / / / / / / / / / / / /
// Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
// Your route code will look like this
// app.get("/sol1", function(req, res) {
//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
//     let arr = [1, 2, 3, 5, 6, 7]
//     let missingNumber

///LOGIC WILL GO HERE 
//     res.send({ data: missingNumber });
// });

// Solution
app.get("/sol1", function(req, res) {
    let arr = [1, 2, 3, 5, 6, 7]

    let total = 0;
    for (let i in arr) {
        total = total + arr[i];

    }
    let lastDigit = arr.pop()
    let consecativeSum = lastDigit * (lastDigit + 1) / 2
    let missingNumber = consecativeSum - total
    res.send({ data: missingNumber });

});
module.exports = app;

app.get("/sol1", function(req, res) {
    let arr = [1, 2, 3, 5, 6, 7]

    function missingNumber(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 != arr[i]) {
                return arr[i] - 1

            }
        }
    }
    let result = missingNumber(arr)
    res.send({ data: result });
})
module.exports = app;

/ / / / / / / / / / / /
// Q2.
// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
// Your route code will look like this
// app.get("/sol2", function(req, res) {
//logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
//             let arr = [33, 34, 35, 37, 38]
//     let missingNumber

///LOGIC WILL GO HERE 

//     res.send({ data: missingNumber });
// });


// solution:
app.get("/sol2", function(req, res) {
    let arr = [33, 34, 35, 37, 38]
    let len = arr.length

    let total = 0;
    for (var i in arr) {
        total += arr[i];

    }
    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecativeSum = (len + 1) * (firstDigit + lastDigit) / 2
    let missingNumber = consecativeSum - total


    res.send({ data: missingNumber });

});
module.exports = app;
app.listen(process.env.PORT || 3003, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3003))
});