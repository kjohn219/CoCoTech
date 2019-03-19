// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
const path = require("path");
// const cors = require("cors");


require('dotenv').config();


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8250;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static(path.join(__dirname, './assets')))

// app.use(cors());
// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// add Helmet as required security
const helment = require ('helmet');
app.use(helmet());

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});

module.exports = app;