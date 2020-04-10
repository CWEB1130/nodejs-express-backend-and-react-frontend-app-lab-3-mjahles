var express = require('express');
var router = express.Router();
var offers = require('../offers.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(offers);
});

module.exports = router;

//We get to the offers.json data by navigating to the localhost:8080/users
//We can see which path is the specified one by checking in the app.js file.
//Another way we can figure out which path to use is by checking the filename.  For example, to view the offers.json data we use the /users route because the command to respond with the offers.json data is found in this file (users.js).
