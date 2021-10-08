
$(document).ready(function() {
$('#dadjoke').click(function() {
  $.ajax({
    dataType: "json",
    url: "https://icanhazdadjoke.com",
    success: function(results) {
      console.log(results["joke"]);
      console.log(results["id"]);
      $('#joke').attr("src", "https://icanhazdadjoke.com/j/"+results["id"]+".png");
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
});
});
