module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  var users = {
    'kareemrady': {
      id: 'kareemrady',
      name: 'Kareem Rady'
    },
    'johndoe': {
      id: 'johndoe',
      name: 'John Doe'
    }
  };
  usersRouter.get('/:id', function(req, res) {

    res.send({
      "user": users[req.params.id]
    });
  });
  usersRouter.get('/', function(req, res) {

    res.send({
      "users": Object.keys(users).map(function(key) { return users[key]; })
    });
  });
  usersRouter.post('/', function(req, res){
    var user = req.body.user;
    res.send({
      "user": {
        id: user.id,
        name: 'testuser'
      }
    });
  });


  app.use('/api/users', usersRouter);
};
