const path = require("path");

module.exports = function(app) {
  // If no matching route is found default to index (until login and JWT operational)
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });

  app.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, './emailGroups.html'));
  });

  app.get('/technicians', function(req, res) {
    res.sendFile(path.join(__dirname, './technicians.html'));
  });
  
  app.get('/addtickets', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/addtickets.html'));
  });

  app.get('/emailGroups', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/emailGroups.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });

  app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, './emailGroups.html'));
  });

}



