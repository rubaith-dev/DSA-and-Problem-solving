const performance = require("../performance")

function addUpTo(n){
    return n*(n+1)/2
}

performance(addUpTo,1000000000000000000)

