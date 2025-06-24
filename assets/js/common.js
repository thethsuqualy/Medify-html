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

document.querySelectorAll('.pricing-btn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove active class from all footers
    document.querySelectorAll('.pricing_footer').forEach(function(footer) {
      footer.classList.remove('active');
    });

    // Add active class to the clicked button's footer
    const footer = btn.closest('.pricing_footer');
    footer.classList.add('active');
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
