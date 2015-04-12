module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/:id', function(req, res) {
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

  res.send({
    "user": users[req.params.id]
  });
});




app.use('/api/users', usersRouter);
};
