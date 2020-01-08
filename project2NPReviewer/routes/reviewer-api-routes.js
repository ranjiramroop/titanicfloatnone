var db = require("../models");

module.exports = function(app) {
  app.get("/api/reviewer", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Reviewer.findAll({
      include: [db.Post]
    }).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });

  app.get("/api/reviewer/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Reviewer.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });

  app.post("/api/reviewer", function(req, res) {
    db.Reviewer.create(req.body).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });

  app.delete("/api/reviewer/:id", function(req, res) {
    db.Reviewer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReviewer) {
      res.json(dbReviewer);
    });
  });
};
