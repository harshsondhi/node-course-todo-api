const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // db.collection('Todos').find().toArray().then(
    //   (docs)=>{
    //      console.log('Todos');
    //      console.log(JSON.stringify(docs,undefined,2));
    //   },
    //   (err)=>{
    //     console.log('Enable to fetch todos:', err);
    //   }
    // );

    // "5a2c3c3cc2d4a61e9846caac"
    // db.collection('Todos').find({_id: new ObjectID("5a2c3c3cc2d4a61e9846caac")}).toArray().then(
    //   (docs)=>{
    //      console.log('Todos');
    //      console.log(JSON.stringify(docs,undefined,2));
    //   },
    //   (err)=>{
    //     console.log('Enable to fetch todos:', err);
    //   }
    // );

    // db.collection('Todos').find().count().then(
    //   (count)=>{
    //      console.log(`Todos count ${count}`);
    //
    //   },
    //   (err)=>{
    //     console.log('Enable to fetch todos:', err);
    //   }
    // );

    db.collection('Users').find({name: "Andrew"}).toArray().then(
      (docs)=>{
         console.log('Todos');
         console.log(JSON.stringify(docs,undefined,2));
      },
      (err)=>{
        console.log('Enable to fetch todos:', err);
      }
    );

    //db.close();
});
