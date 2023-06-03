const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// middleware => parser to parse encoded data of into body of request
app.use(express.urlencoded());

var contactList = [
    {
        name: 'Gaurav',
        phone: '132879'
    },
    {
        name: 'Raghav',
        phone: '654462'
    },
    {
        name: 'Sarang',
        phone: '412545'
    }
]

// controller
app.get('/', function(req, res){
    const data = { 
        title : "My Contacts List",
        contact_list : contactList  // note the naming convention used
    };
    return res.render('home', data); /* render used to for ejs view */
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
    contactList.push(req.body);

    //  redirect the user back to the previous page they were on.
    return res.redirect('back');
});


app.listen(port, function(err){
    if(err){
        console.log('error in running server', err);
        return;
    }
    console.log('express server is running on port : ', port);
});
