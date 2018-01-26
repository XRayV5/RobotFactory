const robot = require('./controllers/robot');

module.exports = function (app) {
  app.get('/robots', function (req, res) {
    res.send(robot.makeBatch());
  });
};
