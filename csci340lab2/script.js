
$(document).ready(function() {
$('#dadjoke').click(function() {
  $.ajax({
    dataType: "json",
    url: "https://icanhazdadjoke.com/j/<joke_id>.png",
    success: function(results) {
      console.log(results["url"]);
      if (results["url"].endsWith(".png")) {
        $('#dog').attr("src", "images/blank.png");
      } else {
        $('#dog').attr("src", results["url"]);
      }
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
});
});
