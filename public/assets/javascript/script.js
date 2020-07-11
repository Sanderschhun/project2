$(function() {
    $(".signUp").on("click", function(event) {
      var customer = $(this).data("information");
      var [customers] = $(this).data("newcustomer");
  
      var newCustomer = {
        customer : customers
      };

      $.ajax("/api/customers/" + customer, {
        type: "PUT",
        data: newCustomer
      }).then(
        function() {
          console.log("here is your search results ", newCustomer);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });