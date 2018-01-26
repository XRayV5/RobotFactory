const robotFactory = require('../models/robot') 
const makeBatch = function(qty) {
    return robotFactory.makeRobots(qty)
}

module.exports = {  
    makeBatch
}