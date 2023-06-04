const express = require('express');
const path = require('path');
const port = 8000;


const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middleware => parser to parse encoded data of into body of request
app.use(express.urlencoded({ extended: true }));

// Static files added
app.use(express.static('assets'));

// controller
app.get('/', function(req, res){

    Contact.find({})
        .then( contacts => {
            const data = { 
                title : "My Contacts List",
                contact_list : contacts  // note the naming convention used
            };
            return res.render('home', data); /* render used to for ejs view */
        })
        .catch( err => {
            console.log('error in fetching contacts from db');
        }); 
});

app.get('/practice', function(req, res){
    const data = { title : "Let us play with ejs"}
    return res.render('practice', data);
});

// router for adding new contact via form
app.post('/create-contact', function(req, res){
     
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    // contactList.push(req.body);
    
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    .then(newContact => {
        console.log('Contact created : ', newContact);
        res.redirect('back');
    })
    .catch(err => {
        console.log('error in creating the contact : ', err);
    });

});

// for deleting a contact
app.get('/delete-contact', function(req, res){
    // get query from url 
    let id = req.query.id;

    // find the contact in the db using id an delete it
    Contact.findByIdAndDelete(id)
        .then(deletedContact => {
            console.log('Contact deleted : ', deletedContact);
            res.redirect('back');
        })
        .catch(error => {
            console.log('Error deleting contact : ', error);
            res.redirect('back');
        });
});


app.listen(port, function(err){
    if(err){
        console.log('error in running server', err);
        return;
    }
    console.log('express server is running on port : ', port);
});
