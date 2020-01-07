var db = require("../models");

module.exports = function (app) {
  // Get all View sorted by different columns
  // GET working to return review + user + whiskey
  app.get("/api/view", function (req, res) {
    db.Review.findAll({
      attributes: ['body', 'rating', 'favorite'],
      raw: true,
      include: [
        {
          model: db.User,
          attributes: ['name']
        },
        {
          model: db.Whiskey,
          attributes: ['name', 'type', 'price']
        }
      ]
    }).then(function (dbView) {
      res.json(dbView);
    });
  });


  app.post("/api/addWhiskey", function (req, res) {
    console.log(req.body)
    db.Whiskey.create(req.body).then(function (dbAddWhiskey) {
      // res.json(dbAddWhiskey);
    });
  });

  app.post("/api/addReview", function (req, res) {
    console.log(req.body)
    db.Review.create(req.body).then(function (dbAddWhiskey) {
      // res.json(dbAddWhiskey);
    });
  });

  app.post("/api/addUser", function (req, res) {
    console.log(req.body)
    db.User.create(req.body).then(function (dbAddUser) {
      res.json(dbAddUser);
      console.log(dbAddUser)
    });
  });

  app.post("/api/addReview", function (req, res) {
    console.log(req.body)
    db.Review.create(req.body).then(function (dbAddReview) {
      res.json(dbAddReview);
      console.log(dbAddReview)
    });
  });


  // Delete an example by id
  app.delete("/api/whiskey/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
