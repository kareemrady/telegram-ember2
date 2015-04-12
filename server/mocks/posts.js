module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": [
        {
          id: "p1",
          created_by: "kareemrady",
          title: "Ember JS",
          body: "post 1 body"
        },
        {
          id: "p2",
          created_by: "johndoe",
          title: "Node JS",
          body: "post 2 body"
        },

          {
            id: "p3",
            created_by: "kareemrady",
            title: "Javascript",
            body: "post 3 body"

        }
      ]
    });
  });


  app.use('/api/posts', postsRouter);
};
