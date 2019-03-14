const path = require("path");

module.exports = function(app) {
  // If no matching route is found default to index
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname, './emailGroups.html'));
  });

  app.get('/technicians', function(req, res) {
    res.sendFile(path.join(__dirname, './technicians.html'));
  });
  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });

  app.get('/index', function(req, res) {
    res.sendFile(path.join(__dirname, './emailGroups.html'));
  });

}



