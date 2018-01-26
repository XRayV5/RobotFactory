const robotFactory = require('../models/RobotFactory') 
const makeBatch = function(qty) {
    return robotFactory.makeRobots(qty)
}

module.exports = {  
    makeBatch
}