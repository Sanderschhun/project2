module.exports = function(app) {

  app.get("/api/customer/", function(req, res) {
     db.Customers.findOne({
       where: {
        first_name: req.params.first_name
        last_name: req.params.last_name
        phone_number: req.params.phone_number
      }
    }).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  
  }

  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
}