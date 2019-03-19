// Requiring our models
const jwt = require('jsonwebtoken');
const userVerification = require('../controller/auth');
const config = require('../config/pass');
const users = require('../controller/user')
let currentUser;
const db = require('../models');
console.log(db.emailGroups);
module.exports = function(app){
 // GET route for retrieving all available DL groups from Database (emulates integration to Outlook GAL)
  app.get('/api/dlgroups', function(req, res) {
 console.log('about to call findall');
    db.emailGroups.findAll({
      attributes:['id','dl_name'],
    }).then(function(dlList) {
        console.log('dlList');
      res.json(dlList);
    
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.post("/api/login",function(req,res){
    if(userVerification(req.body.username,req.body.password)){
      const token = jwt.sign({ id: req.body.username}, config.secret, {
        expiresIn: 86400,
        algorithm: 'HS512' // expires in 24 hours
      });
      currentUser = req.body.username;
      console.log(`The token is ${token}`);
      res.cookie('token',token).json({ auth:true, redirect:'dashboard' });
      
    } else {
      console.log('hello world here');
      res.status(401).send("You are not authorized");
    }
  });
// GET route for retrieving all technicians whom are members of the chosen DL
app.get('/api/technicians', function (req, res) 
{
console.log(req.query)
 db.technicians.findAll({
   attributes: ['id', 'SSO','NAME','GROUP_NAME','STATUS'],
   where:{
     GROUP_NAME: req.query.group
   }
   }).then(function(dbTechnicians) {

   res.json(dbTechnicians);

 }).catch(function (error) {
   res.json({ error: error });
 });
});



}

