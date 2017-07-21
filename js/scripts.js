$(document).ready(function(){
  // Business Logic
  var pingPong = function(count){
  var outcome = [];
    for (var i =1; i<= count; i ++){
      if(i%15 === 0){
        outcome.push("ping-pong");
      }
      else if(i%5 === 0){
        outcome.push("pong");
      }
      else if(i%3 === 0){
        outcome.push("ping");
      }
      else{
        outcome.push(i);
      }
    }
    return outcome;
  };
  // Front-end logic
  $("form#pingpong").submit(function(event){
    $("#result").empty();
      event.preventDefault();
    var count = parseInt($("input#number").val());
      if (isNaN(count)) {
        alert("Enter a number, Please!");
      }else{
      var outcome = pingPong(count);
      }
    outcome.forEach(function(results){
      $("#result").append("<li>" + results + "</li>")
    });
  });
});
