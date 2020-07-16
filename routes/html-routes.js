var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // blog route loads blog.html
  app.get("/reviews", function(req, res) {
    res.render("reviews");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  })




};
