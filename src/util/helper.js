function printDate() {
    const now = new Date()
    console.log("the current date is:", now.getDate())
    printMonth()
}

function printMonth() {
    const now = new Date()
    console.log("the current month is:", now.getMonth() + 1);
    getBatchInfo()
}

let getBatchInfo = function() {
    console.log('Plutonium,3rd week,17th day,the topic of today node.js module system')
}


module.exports.printDate = printDate