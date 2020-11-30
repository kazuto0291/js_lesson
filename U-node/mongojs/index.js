const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url,(error,client)=> {
  const db =client.db("sample");
  // コレクションの作成
  // db.createCollection("test4",(error,collection) => {
  //   client.close();
  // })
// コレクションをリスト表示
  // db.listCollections().toArray((error, items)=> {
  //   for(let item of items) {
  //     console.log(item.name);
  //   }
  //   client.close();
  // })
// コレクション名の変更
// db.renameCollection("test","test_new", (error,collection) => {
//   console.log(collection.name);
//   client.close();
// })

// コレクションの削除
  // db.dropCollection("test_new", (error) => {
  //   client.close();
  // });

  // コレクションにデータの挿入
  // db.collection("products",(error,collection) => {
  //   console.log(collection.name)
  //   collection.insertMany([
  //     {name: "pen", price: 120},
  //     {name: "note", price: 100},
  //     {name: "paper", price: 10}
  //   ], (error, result) => {
  //     client.close();
  //   })
  // })

  // コレクションのデータのリスト表示
  // db.collection("products", (error,collection) => {
  //   // 正規表現でnameにeを含む値を検索
  //   collection.find({name: {$regex: /p/g}}).toArray((error,docs) => {
  //     for(let doc of docs){
  //       console.log(doc.name);
  //     }
  //     client.close();
  //   })
  // })

  // コレクションの値の更新
  // db.collection("products", (error, collection) => {
  //   collection.updateMany(
  //     {name: {$regex: /e/g}}, //nameが正規表現（eを）にマッチする場合（where）
  //     {$inc: {price:20}},  // price20上げる(set)
  //     (error,results) => {
  //       client.close();
  //     }
  //   )
  // })

  // コレクション値を削除
  // db.collection("products", (error, collection) => {
  //   collection.deleteMany(
  //     { name: /p/g },
  //     (error, results) => {
  //       client.close();
  //     }
  //   )
  // })

});