var express = require('express');
const expressLayouts = require('express-ejs-layouts')

var app = express();

// set the view engine to ejs
app.use(expressLayouts)
app.set('layout', './layout/layout')
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/Home',
    {placeListing:[]}
  );
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(3001);
console.log('Server is listening on port 8080');