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
//         alert("i")
//     // result.push(i);
//
//       }
//       }
  });
});
