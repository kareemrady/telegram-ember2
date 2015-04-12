module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [
        {
          id: "p1",
          created_By: "andreisoare",
          body: "post 1 body"
        },
        {
          id: "p2",
          created_By: "vladberteanu",
          body: "post 2 body"
        }
      ]
    });
  });


  app.use('/api/posts', postsRouter);
};
