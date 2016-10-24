var myFavorite=[];
var myFavorite2=[];
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    myFavorite=[$("#color").val(),$("#animal").val(),$("#food").val(),$("#movie").val()];
    $(".results").show();
    myFavorite2=myFavorite.slice();
    $("#result-list").append("<li>My favorite color is: "+myFavorite2[0]+"</li>");
    $("#result-list").append("<li>My favorite animal is: "+myFavorite2[1]+"</li>");
    $("#result-list").append("<li>My favorite food is: "+myFavorite2[2]+"</li>");
    $("#result-list").append("<li>My favorite movie is: "+myFavorite2[3]+"</li>");
  })
});
