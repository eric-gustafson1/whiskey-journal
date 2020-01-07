var db = require("../models");
require('../views/');
const wiki = require('wikijs').default;

let discoverTopic = [];
let discoverSummary;

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/addUser", function (req, res) {
    res.render('newUser')
  });


  // Discover Page route
  app.get("/discover", function (req, res) {
    whiskeyTopic = discoverTopic[0]
    res.render('discover', {
      topic: whiskeyTopic,
      summary: discoverSummary,
      hasData: discoverTopic.length > 0
    });
  });

  // Discover/topic Page route
  app.post("/discover/topic", function (req, res) {
    console.log(req.body)
    discoverTopic = [];
    discoverTopic.push(req.body.topic);
    console.log('htmlRoutes: topic is ', discoverTopic);

    wiki(discoverTopic)
      .page(discoverTopic)
      .then(page => page.summary())
      .then(function (data) {
        discoverSummary = data;
        res.redirect('/discover');
        console.log('redirect')
      })

  });

  // Add whiskey page
  app.get("/addWhiskey", function (req, res) {
    let usersArray = []

    db.User.findAll({
    }).then(function (dbUsers) {
      for (let i = 0; i < dbUsers.length; i++) {
        usersArray.push({ id: dbUsers[i].id, name: dbUsers[i].name })
      }
    }).then(function () {
      console.log(usersArray);
      res.render('newWhiskey', {
        users: usersArray
      })
    })

  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
