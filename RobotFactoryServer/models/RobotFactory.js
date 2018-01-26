const uuid = require('short-uuid')();
function RobotFactory() {
    const STATUSES = ["on fire",   "rusty",   "loose screws", "paint scratched"]
    const COLORS = ['red', 'blue', 'orange', 'yellow', 'green']
    const ROTOR_MAX = 10
    const DEFAULT_BATCH = 5

    function Robot() {
        const statuses = makeProperty(STATUSES, rand(STATUSES.length))
        return (
            {
                id: `robot-${uuid.new()}`,
                name: makeName(statuses, 'robot'), 
                configuration: {
                    hasSentience: makeProperty([false, true]), 
                    hasWheels: makeProperty([false, true]), 
                    hasTracks: makeProperty([false, true]), 
                    numberOfRotors: rand(ROTOR_MAX), 
                    Colour: makeProperty(COLORS)
                },
                statuses: statuses
            }
        )
    }
    
    function makeProperty(vals, take = 1) {
        return shuffle(vals).slice(0, take)
    }
    
    function makeName(statuses, suffix) {
        return statuses.length === 0 ? `Good ${suffix}` : `${statuses.join()} ${suffix}`
    }
    
    function rand(range) {
        return Math.floor(Math.random() * (range + 1));
    } 
    
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = rand(i);
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    return {
        makeRobot() {
            return new Robot()
        },
        makeRobots(qty = DEFAULT_BATCH) {
            return new Array(qty).fill('').map(bot => new Robot())
        }
    }
}

module.exports = new RobotFactory()