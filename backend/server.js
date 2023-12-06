// server.js

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const dormfindrRoutes = require('./routes/dormListing');
const dormfindrRoutes2 = require('./routes/SignUp');
const loginRoutes = require('./routes/login'); // Require the login routes
const verificationRoutes = require('./routes/verification');
const cors = require('cors');

// express app
const app = express();
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend domain
}));

// middleware
app.use(express.json()); // Built-in middleware to parse JSON bodies
//app.use('/api', verificationRoutes);

// Simple logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// API routes
app.use('/api/dormfindr/dormlisting', dormfindrRoutes);
app.use('/api/dormfindr/signup', dormfindrRoutes2);
app.use('/api/dormfindr/login', loginRoutes);
app.use('/api', verificationRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 500).json({ message: error.message || 'Internal Server Error' });
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
