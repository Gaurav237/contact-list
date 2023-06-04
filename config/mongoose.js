// require the library
const mongoose = require('mongoose');

// connect tot the database
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');

// acquire the connection (to check if sucessfull or not)
const db = mongoose.connection;

// if connection unsuccessful
db.on('error', console.error.bind(console, 'connection error'));

// if connection successful
db.once('open', function(){
    console.log('Successfully connected to the Database');
});
