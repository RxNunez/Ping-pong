$(document).ready(function() {
  // Front-end logic
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var count = parseInt($("input#number").val());
    var result = [];
    if (count === NaN) {
      alert("Please enter a number")
    }
  // Business Logic
   for(var i = 1; i <= count; i++){
     if(i%3 === 0){
     result.push("ping");
   }
    // else if(i%5 === 0){
    //   result.push("ping");
    // }

  });
});

// += "<li>ping</li>"
