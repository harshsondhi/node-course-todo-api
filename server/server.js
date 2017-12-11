var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});


app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

//============
// describe('DELETE /todos/:id',()=>{
//   it('should remove a todo', (done) => {
//     var hexId = todos[1]._id.toHexString();
//
//     request(app)
//       .delete(`/todos/${hexId}`)
//       .expect(200)
//       .expect((res) => {
//         expect(res.body.todo._id).toBe(hexId);
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//
//         Todo.findById(hexId).then((todo) => {
//           expect(todo).toNotExist();
//           done();
//         }).catch((e) => done(e));
//       });
//   });
//
//   it('should return 404 if todo not found', (done) => {
//     var hexId = new ObjectID().toHexString();
//
//     request(app)
//       .delete(`/todos/${hexId}`)
//       .expect(404)
//       .end(done);
//   });
//
//   it('should return 404 if object id is invalid', (done) => {
//     request(app)
//       .delete('/todos/123abc')
//       .expect(404)
//       .end(done);
//   });
//
//
// });

//============

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
