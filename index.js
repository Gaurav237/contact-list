const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

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
})


app.listen(port, function(err){
    if(err){
        console.log('error in running server', err);
        return;
    }
    console.log('express server is running on port : ', port);
});
