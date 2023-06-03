const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// controller
app.get('/', function(req, res){
    const data = { title : "My Contacts List"};
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
