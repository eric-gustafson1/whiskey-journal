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

  // Example that can be used to order the View by a column
  // app.get('/:store', (req, res) => {
  //     let store = req.params.store;

  //     connection.query('SELECT * FROM groceries WHERE store = ?', [store], (err, data) => {
  //         if (err) {
  //             return res.statusCode(500).end();
  //         }
  //         res.render('index', { groceries: data })
  //     })

  // })

  // Get data for the Discover page from Wiki API
  app.get("/api/discover", function (req, res) {
    db.whiskey.findAll({}).then(function (dbView) {
      res.json(dbView);
    });
  });

  // Create a new whiskey
  // Tested with Postman successfully
  // {
  //   "name": "Tin Cup",
  //   "type": "Whiskey",
  //   "price": "34.78"
  // },
  // {
  //   "name": "TX",
  //   "type": "Whiskey",
  //   "price": "33.99"
  // }

  app.post("/api/addWhiskey", function (req, res) {
    db.Whiskey.create(req.body).then(function (dbAddWhiskey) {
      res.json(dbAddWhiskey);
    });
  });

  // Create a new User
  // Tested with Postman successfully
  // {
  //   "name": "Eric",
  //   "over21": "1"
  // },
  // {
  //   "name": "Kelli",
  //   "over21": "1"
  // }
  app.post("/api/addUser", function (req, res) {
    console.log(req.body)
    db.User.create(req.body).then(function (dbAddUser) {
      res.json(dbAddUser);
      console.log(dbAddUser)
    });
  });

  // Create new Review
  // Tested with Postman successfully
  //{
  // 	"body": "ipsom ooftsem",
  // 	"rating": "3",
  // 	"UserId": "1",
  // 	"WhiskeyId": "2"
  // }
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
