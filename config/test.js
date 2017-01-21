
var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://joshudson:PitSteel43@ds111559.mlab.com:11559/cardexchange';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
 assert.equal(null, err);
 console.log("Connected successfully to server");

    var collection = db.collection('users');

collection.find({}).toArray(function(err, docs) {
   assert.equal(err, null);
   console.log("Found the following records");
   console.log(docs)
   //callback(docs);
 });

 db.close();
});