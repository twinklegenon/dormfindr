// server.js

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const dormfindrRoutes = require('./routes/dormListing');
const dormfindrRoutes2 = require('./routes/SignUp');
const loginRoutes = require('./routes/login'); // Require the login routes

// express app
const app = express();

// middleware
app.use(bodyParser.json()); // Body parser middleware to parse JSON bodies
app.use(express.json()); // Built-in middleware to parse JSON bodies

// Simple logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/dormfindr/dormlisting', dormfindrRoutes);
app.use('/api/dormfindr/signup', dormfindrRoutes2);
app.use('/api/dormfindr/login', loginRoutes); // Use the login routes

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
