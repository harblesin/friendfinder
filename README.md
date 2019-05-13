# Friendfinder
## Friend Finder, using Node and Express Servers, is a heroku deployed web page with a 10 question survey to find the users best match for a friend.

### Friend finder uses express to route POST and GET requests from the user and JSON data housed with the server, and use that information to calculate the users best match.

### After clicking through to the survey, the user is required to fill the following fields:

- Name
- Photo Link/Photo Upload
- An answer for all 10 questions

### Upon submitting, the total score of the user is calculated. Simultaneously, upon submission of the survey, each friend in the JSON array within the server has their scores totalled and compared against the users total. 

### All this said logic is completed server side and is used to present the user with the best match; the friend with the smallest difference to the users total score.

### This application uses multiple resources to provide the desired result. Resources and methods including but not limited to:

 - Bootstrap
 - Jquery
 - Express  
 - Node
 - Font Awesome
 - Heroku
 - Routing
 - GET/POST requests
 - Postman
 - express.static()

>### Any potential redundancies expressed within are done for clarification and documentation
