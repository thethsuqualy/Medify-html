// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
 document.querySelectorAll('.lower-carea-h4').forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelectorAll('.lower-carea-h4').forEach(function(item) {
      item.classList.remove('active');
    });
    el.classList.add('active');
  });
});
});

// Your jQuery code goes here
$(function () {
  // Your code here
  //   $("button").on("click", () => {
  //     console.log("Hello");
  //   });
});
