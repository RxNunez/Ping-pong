$(document).ready(function(){
  // Business Logic
  var pingPong = function(count){
  var outcome = [];
  for (var i = 0; i<= number; i ++){
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

// function howMany(selectObject) {
//   var numberSelected = 0;
//   for (var i = 0; i < selectObject.options.length; i++) {
//     if (selectObject.options[i].selected) {
//       numberSelected++;
