// Requiring our models
const jwt = require('jsonwebtoken');
const userVerification = require('../assets/controller/auth');
const config = require('../assets/config/pass');
let currentUser;
const db = require('../models');

module.exports = function(app){

  
  // GET route for retrieving all stock
  app.get('/api/dlgroups', function(req, res) {

    // Here we add an 'include' property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Article
    console.log('about to call findall');
    db.emailGroups.findAll({
      
      }).then(function(dlList) {
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
      res.status(401).send("You are not authorized");
    }
  });

}

    
      // app.use(function(req, res, next){
      //   const token = req.headers.authorization;
      //   if (token) {
      //     jwt.verify(token, config.secret, function(err, decoded) {
      //       if ( err || (decoded.id != currentUser) ) {
      //         res.status(403).json({
      //           auth: false,
      //           message:"Incorrect or missing token"
      //         });
      //       } else {
      //         next();
      //       }    
      //     });
      //   } else {
      //     res.status(403).json({
      //       auth: false,
      //       message:"Incorrect or missing token"
      //     }); 
      //   }
      // });
    
      // app.get("/api/users",function(req,res){
      //     res.json({ auth:true, data:users });
      // });


 

// }

// // This is the beginning of SAI API code minus the module export
// // GET route for retrieving all groups
// app.get('/api/technicians', function (req, res) 
// {
// console.log(req.query)
//  // Here we add an 'include' property to our options in our findAll query
//  // We set the value to an array of the models we want to include in a left outer join
//  // In this case, just db.Article
//  db.technicians.findAll({
//    where:{
//      GROUP_NAME:"CocoTech "+req.query.group+ " Support"
//    }
//    }).then(function(dbTechnicians) {

//  // Here we add an 'include' property to our options in our findAll query
//  // We set the value to an array of the models we want to include in a left outer join
//  // In this case, just db.Article
//    res.json(dbTechnicians);

//  }).catch(function (error) {
//    res.json({ error: error });
//  });
// });


// // PUT route for updating the technician status
// app.put('/api/TECHNICIANS/:id', function(req, res) 
// {
//  console.log(req.body);
//  console.log(req.params.id);
//  db.technicians.update
//   (
//    { stock_quantity: req.body.technician_status },
//      { where: { id: req.params.id  } }
//   ).then
//   (
//    function(qtyUpdate) 
//     {   
//        console.log('Hello there' , qtyUpdate);
//        res.json(qtyUpdate);
//     }
//   ).catch
//  (
//   function(error) 
//    { 
//      console.log('error side', error); 
//      res.json({ error: error });
//    }
//  );
// });
// } // this is extraneous end of Sai API route

