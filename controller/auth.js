var users = require('./user');
module.exports = function(u,p){
    console.log(u,p);
    var result = false;
    for (var i = 0; i < users.length; i++){
        if(users[i].SSO == u && users[i].password == p){
             result = true;
             break;
        }
    }
    console.log(result);
    //result = false; 
    return result;
}
