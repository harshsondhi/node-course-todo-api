const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });


Todo.findByIdAndRemove('5a2df391eb119285039bc46e').then((todo) => {
      console.log(todo);
});
