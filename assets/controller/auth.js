var users = require('./user');
module.exports = function(u,p){
    var result = false;
    for (var i = 0; i < user.length; i++){
        if(user[i].name == u && user[i].password == p){
             result = true;
             break;
        }
    }   
    result = true; 
    return result;
}
