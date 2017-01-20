var mongo = require('mongodb').MongoClient;

var dbConnectionUrl = 'Insert MongoDB URI here';
/*
Example localhost: 'mongodb://localhost:27017/test';
Example Azure URI: mongodb://aaronsmongodbrw:xSJEozk4Tmg74Q1iyXMN0sEgr0PfegnIrDz5xq8N5UvmwlsFSSqGR0QMAx1nw5hdiENdcSQbHHK7t4ZQY0wf6g==@aaronsmongodbrw.documents.azure.com:10250/<db_name>?ssl=true
Example Heroku (MongoLab) URI: 'mongodb://<db_user>:<db_pass>@ds117919.mlab.com:17919/heroku_n54n38l8';
*/
var collections = {};

mongo.connect(dbConnectionUrl, function (err, db) {
  if (err) {
    console.log('Can not connect to MongoDB. Did you run it?');
    console.log(err.message);
    return;
  }
  /* this is your collection name below. */
  collections.people = db.collection('users');
});


module.exports = collections;
