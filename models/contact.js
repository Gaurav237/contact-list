// require the library
const mongoose = require('mongoose');

// defining schema for contact
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

// Compile the Schema into a Model
// 'Contact' is the name of Collection
const Contact = mongoose.model('Contact', contactSchema);

// exporting this module
module.exports = Contact;