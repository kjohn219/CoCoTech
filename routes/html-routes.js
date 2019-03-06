const path = require("path");

module.exports = function(app) {
  // If no matching route is found default to index
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}
