module.exports = function(connection, Sequelize) {
    const emailGroups = connection.define('emailGroups', {
      dl_name: Sequelize.STRING
      });
  
    return emailGroups;
  };
