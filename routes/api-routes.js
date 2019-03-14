// Requiring our models
const jwt = require('jsonwebtoken');
const userVerification = require('../assets/controller/auth');
const config = require('../config/pass');
const users = require('../public/js/user')
let currentUser;
const db = require('../models');

module.exports = function(app){
 // GET route for retrieving all available DL groups from Database (emulates integration to Outlook GAL)
  app.get('/api/dlgroups', function(req, res) {
 //  console.log('about to call findall');
    db.emailGroups.findAll({
      
      }).then(function(dlList) {
      res.json(dlList);
    
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

// GET route for retrieving all technicians whom are members of the chosen DL
app.get('/api/technicians', function (req, res) 
{
//console.log(req.query)
 db.technicians.findAll({
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







//     app.post("/api/login",function(req,res){
//         if(userVerification(req.body.username,req.body.password)){
//           const token = jwt.sign({ id: req.body.username}, config.secret, {
//             expiresIn: 86400,
//             algorithm: 'HS512' // expires in 24 hours
//           });
//           currentUser = req.body.username;
//           console.log(`The token is ${token}`);
//           res.cookie('token',token).json({ auth:true, redirect:'success' });
          
//         } else {
//           res.status(401).send("You are not authorized");
//         }
//       });
    
//       // app.use(function(req, res, next){
//       //   const token = req.headers.authorization;
//       //   if (token) {
//       //     jwt.verify(token, config.secret, function(err, decoded) {
//       //       if ( err || (decoded.id != currentUser) ) {
//       //         res.status(403).json({
//       //           auth: false,
//       //           message:"Incorrect or missing token"
//       //         });
//       //       } else {
//       //         next();
//       //       }    
//       //     });
//       //   } else {
//       //     res.status(403).json({
//       //       auth: false,
//       //       message:"Incorrect or missing token"
//       //     }); 
//       //   }
//       // });
    
//       // app.get("/api/users",function(req,res){
//       //     res.json({ auth:true, data:users });
//       // });


 

// }





