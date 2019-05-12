//Pulling in required modules.
//brought in path just for fun.
var express = require("express");
var path = require("path");

//Put express into a variable and defining the port
//it will use, and in a way to allow heroku use
var app = express();
var PORT = process.env.PORT || 3000;

//Middleware to handle encoded data and json data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Quick debugging method, displays the path used, 
//and the method, before passing the server along
app.use((req,res,next) => {
    console.log('req.url',req.url);
    console.log('req.method',req.method);
    next();
})

//Tells the server the route for static images in the html
app.use(express.static(__dirname + '/app/public/images'));

//Importing the routes for the html pages and the
//post and get routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Finally tells the server to listen to the port we've chosen
app.listen(PORT, () => { console.log("App listening to port:" + PORT)});


