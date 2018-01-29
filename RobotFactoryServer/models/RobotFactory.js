const uuid = require("short-uuid")();
const sh = require("shorthash");

function RobotFactory() {
  const NAMES = [
    "Wall E",
    "Orion Pax",
    "Ratchet",
    "Smokescreen",
    "Arcee",
    "Bulkhead",
    "Ultra Magnus",
    "Bumblebee",
    "Wheeljack"
  ];
  const STATUSES = ["on fire", "rusty", "loose screws", "paint scratched"];
  const COLORS = ["red", "blue", "orange", "yellow", "green"];
  const ROTOR_MAX = 10;
  const DEFAULT_BATCH = 15;

  function Robot() {
    const statuses = makeProperty(STATUSES, rand(STATUSES.length));
    const color = makeProperty(COLORS)[0];
    const name = makeName(NAMES, color);
    const id = sh.unique(name + statuses.join())
    return {
      id: `robot-${id}`,
      name: name,
      configuration: {
        hasSentience: makeProperty([false, true])[0],
        hasWheels: makeProperty([false, true])[0],
        hasTracks: makeProperty([false, true])[0],
        numberOfRotors: rand(ROTOR_MAX),
        Colour: color
      },
      statuses: statuses
    };
  }

  function makeProperty(vals, take = 1) {
    return shuffle(vals).slice(0, take);
  }

  function makeName(names, color) {
    const name = makeProperty(names);
    const nameColor = color.charAt(0).toUpperCase() + color.slice(1)
    return `${nameColor} ${name}`;
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
      return new Robot();
    },
    makeRobots(qty = DEFAULT_BATCH) {
      return new Array(qty).fill("").map(bot => new Robot());
    }
  };
}

module.exports = new RobotFactory();
