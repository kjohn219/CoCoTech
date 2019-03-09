module.exports = function(connection, Sequelize) {
    const technicians = connection.define('technicians', {
    
	  SSO: Sequelize.INTEGER,
      NAME: Sequelize.STRING,
      GROUP_NAME: Sequelize.STRING,
      STATUS: Sequelize.STRING,
   
    });
  
    return technicians;
  };