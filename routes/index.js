var express = require('express');
var router = express.Router();

// Access to real DB
var db = require('../db-setup.js');

/* GET home page. */
router.get('/', function (req, res, next) {

  // Rendering the index view with the title 'Sign Up'
  res.render('index', { title: 'Sign Up'});

});

/* GET userlist JSON */
router.get('/userlist', function (req, res, next) {
  // TODO: query database db.people.find(...) and return the result
  // res.send({...});
  res.send('Nothing :(');
});

/* POST to adduser */
router.post('/adduser', function (req, res, next) {

  // Catching variables passed in the form
  var userName = req.body.username;
  var userFruit = req.body.userfruit;

  // Adding the new entry to the db
  // TODO: insert the new document into collection
  //   db.people.insert({ ... });
  //      ... or ...
  // update the existing one!
  //   db.people.update({ _id: ... }, { $set: {...} })
  // How would you do this?

  // Redirecting back to the root
  res.redirect('/');

});

/* POST to deleteuser */
router.post('/deleteuser', function (req, res, next) {

  // Catching variables passed in the form
  var userName = req.body.username;

  // Checking whether user is in db
  // TODO: check if the user is in db with db.people.find(...),
  // TODO: and then remove it if it exists db.people.remove(...)
  // TODO: or return an error
  res.send('Nothing :(');
});

router.get('/findfruit', function (req, res, next) {
  var name = req.query.username;

  // TODO: check if user exists. If user exists, send back their fruit.
  
  var userExists = false;
  if (userExists) {
    res.send('Nothing :(');
    //res.send({});
  }
  else {
    res.send("Error! Username not found");
  }
});

module.exports = router;
