// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lower-carea-h4").forEach(function (el) {
    el.addEventListener("click", function () {
      document.querySelectorAll(".lower-carea-h4").forEach(function (item) {
        item.classList.remove("active");
      });
      el.classList.add("active");
    });
  });

  document.querySelectorAll(".pricing-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all footers
      document.querySelectorAll(".pricing_footer").forEach(function (footer) {
        footer.classList.remove("active");
      });

      // Add active class to the clicked button's footer
      const footer = btn.closest(".pricing_footer");
      footer.classList.add("active");
    });
  });
});

// Your jQuery code goes here
$(function () {
  $(".logo-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(document).ready(function () {
    $(".top-slider").slick({
      dots: false,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
    });
  });
});
