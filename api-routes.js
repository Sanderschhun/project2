module.exports = function(app) {

  app.get("/api/customer/", function(req, res) {
     db.Customer.findOne({
       where: {
        email: req.params.email
        first: req.params.first
        last: req.params.last
        phonenumber: req.params.phonenumber
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  
  }

  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
}