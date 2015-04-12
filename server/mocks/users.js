module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/:id', function(req, res) {
  var users = {
    'andreisoare': {
      id: 'andreisoare',
      name: 'Andrei Soare'
    },
    'vladberteanu': {
      id: 'vladberteanu',
      name: 'Vlad Berteanu'
    }
  };

  res.send({
    "user": users[req.params.id]
  });
});




app.use('/api/users', usersRouter);
};
