// requiring express module 
const express = require('express');

// if port is any route or 3001
const PORT = process.env.PORT || 3001; 

// instantiate the server
const app = express(); 

// request data
const { notes } = require('./data/db.json');

// chain listen() method onto our servers
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});