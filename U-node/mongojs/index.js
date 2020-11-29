const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url,(error,client)=> {
  const db =client.db("sample");
  db.createCollection("test4",(error,collection) => {
    client.close();
  })
});