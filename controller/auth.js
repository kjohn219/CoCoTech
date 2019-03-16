var users = require('./user');
module.exports = function(u,p){
    var result = false;
    for (var i = 0; i < users.length; i++){
        if(users[i].name == u && users[i].password == p){
             result = true;
             break;
        }
    }   
    result = true; 
    return result;
}
