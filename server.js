// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();

app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views'));
app.set('views', __dirname);
app.set('view engine', 'ejs');// setting up ejs and our views folder

// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})

// post route for adding a user
app.post('/users', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.redirect('/');
})

// require body-parser
var bodyParser = require('body-parser');
// use it!
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
  extended: true
}));


// tell the express app to listen on port 8000
app.listen(8400, function() {
 console.log("listening on port 8400");
})