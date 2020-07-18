$(document).ready(function(){

  $("#signUp").on("click", function(event) {
 
    window.location.href = "/signup";
 
  });

  $("#logIn").on("click", function(event) {
 
  window.location.href = "/login";

  });


  $("#customers").on("click", function(event) {
 
  window.location.href = "/customers";

  });

  $("Sea").on("click", function (event) {
    window.location.href = "/reviews";
  });

});