//Brings in path
var path = require("path");

//Exports the routes of the html pages used as a function
//to be used by the server
module.exports = function(app) {

//Default path that brings up the front page with the link to the survey
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//Route which directs you to the html page containing the list of questions
app.get('/survey', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});
};