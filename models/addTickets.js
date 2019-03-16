module.exports = function(connection, Sequelize) {
    const addTickets = connection.define('addTickets', {
    
      REQUESTER_SSO: Sequelize.INTEGER,
      REQUESTER_NAME: Sequelize.STRING,
      PHONE: Sequelize.STRING,
      CATEGORY: Sequelize.STRING,
      DESCRIPTIONS: Sequelize.STRING,
      TICKET: Sequelize.STRING
   
    });
  
    return addTickets;
  };

