const robot = require('./controllers/robot');

module.exports = function (app) {
  app.get('/robots', function (req, res) {
    res.send(robot.makeBatch());
  });

  app.post('/robots/:id/extinguish', function(req, res) {
    res.json({success : "Fire Extinguished", status : 200});    
  })

  app.post('/robots/recycle', function(req, res) {
    res.json({success : "Bots Recycled", status : 200});
  })

  app.put('/shipments/create', function(req, res) {
    res.json({success : "Shipment sent", status : 200});
  })
};
