var mongo = require('mongodb').MongoClient;

var dbConnectionUrl = 'mongodb://aaronsmongodbrw:xSJEozk4Tmg74Q1iyXMN0sEgr0PfegnIrDz5xq8N5UvmwlsFSSqGR0QMAx1nw5hdiENdcSQbHHK7t4ZQY0wf6g==@aaronsmongodbrw.documents.azure.com:10250/test?ssl=true';

var collections = {};

mongo.connect(dbConnectionUrl, function (err, db) {
  if (err) {
    console.log('Can not connect to MongoDB. Did you run it?');
    console.log(err.message);
    return;
  }

  collections.people = db.collection('users');
});


module.exports = collections;
