// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {
  //service start
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
  //service end

  //hamburger start

  setTimeout(function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const closeBtn = document.getElementById("closeSidebar");
    const submenuToggle = document.getElementById("submenuToggle");
    const submenu = document.getElementById("submenu");
    const submenuArrow = document.getElementById("submenuArrow");

    // Hamburger menu click
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        if (sidebar) sidebar.classList.toggle("active");
        if (overlay) overlay.classList.toggle("active");
      });
    }

    // Close button click
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        if (sidebar) sidebar.classList.remove("active");
        if (overlay) overlay.classList.remove("active");
        if (hamburger) hamburger.classList.remove("active");
      });
    }

    // Overlay click
    if (overlay) {
      overlay.addEventListener("click", () => {
        if (sidebar) sidebar.classList.remove("active");
        overlay.classList.remove("active");
        if (hamburger) hamburger.classList.remove("active");
      });
    }

    // Submenu toggle
  //   if (submenuToggle && submenu && submenuArrow) {
  //     submenuToggle.addEventListener("click", () => {
  //       if (submenu.style.display === "block") {
  //         submenu.style.display = "none";
  //       } else {
  //         submenu.style.display = "block";
  //       }
  //       submenuArrow.classList.toggle("rotate");
  //     });
  //   }
  // }, 2000);
 if (submenuArrow && submenu) {
    submenuArrow.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering other click events
      submenu.style.display = submenu.style.display === "block" ? "none" : "block";
      submenuArrow.classList.toggle("rotate");
    });
  }
}, 2000);
  //humburger end
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
