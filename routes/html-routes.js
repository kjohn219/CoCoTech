const path = require("path");

module.exports = function(app) {
  // If no matching route is found default to index (until login and JWT operational)
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.get('/technicians', function(req, res) {
    console.log('serving file');
    res.sendFile(path.join(__dirname, '/../public/technicians.html'));
  });
  
  app.get('/addtickets', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/addtickets.html'));
  });

  app.get('/cocoservicenow', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/cocoservicenow.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });
}



