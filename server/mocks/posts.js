module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [
        {
          id: "p1",
          author: "kareemrady",
          title: "Ember JS",
          body: "post 1 body"
        },
        {
          id: "p2",
          author: "johndoe",
          title: "Node JS",
          body: "post 2 body"
        },

          {
            id: "p3",
            author: "kareemrady",
            title: "Javascript",
            body: "post 3 body"

        }
      ]
    });
  });


  app.use('/api/posts', postsRouter);
};
