var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req,res,next) => {
    console.log('req.url',req.url);
    console.log('req.method',req.method);
    next();
})


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, () => { console.log("App listening to port:" + PORT)});


