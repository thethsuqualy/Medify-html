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
    if (submenuArrow && submenu) {
      submenuArrow.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent triggering other click events
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
        submenuArrow.classList.toggle("rotate");
      });
    }
  }, 2000);
  //humburger end

  //faq start
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      const answer = item.querySelector(".faq-answer");
      const isActive = item.classList.contains("active");

      // Close all
      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".faq-answer").style.maxHeight = null;
      });

      // Open clicked
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
  //faq end

  //blog single start
  document.querySelectorAll(".app-wrapper").forEach((wrapper) => {
    const baseImg = wrapper.querySelector(".base-img");
    const floatImg = wrapper.querySelector(".float-img");

    let currentY = 0;
    let targetY = 0;
    let opacity = 0;
    let targetOpacity = 0;
    let animationFrame;
    let easing = 0.1;

    function animate() {
      currentY += (targetY - currentY) * easing;
      opacity += (targetOpacity - opacity) * easing;

      floatImg.style.transform = `translateY(${currentY}px)`;
      floatImg.style.opacity = opacity;

      if (
        Math.abs(currentY - targetY) > 0.1 ||
        Math.abs(opacity - targetOpacity) > 0.01
      ) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    wrapper.addEventListener("mouseenter", () => {
      baseImg.style.opacity = "0";
      targetY = -7;
      targetOpacity = 1;
      easing = 0.05;
      cancelAnimationFrame(animationFrame);
      animate();
    });

    wrapper.addEventListener("mouseleave", () => {
      baseImg.style.opacity = "1";
      targetY = 0;
      targetOpacity = 0;
      easing = 0.05;
      cancelAnimationFrame(animationFrame);
      animate();
    });
  });
  //blog singel end
});

// Your jQuery code goes here
// ads slider start
$(function () {
  $(".logo-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: true,
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
  // ads slider end

  // top slider start
  $(document).ready(function () {
    $(".top-slider").slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow: ".next",
      nextArrow: ".prev",
      autoplay: false,
      autoplaySpeed: 3000,
    });
  });
  // top slider end
  //top counter setup start
  $(document).ready(function () {
    $(".top-number span").counterUp({
      delay: 10,
      time: 3000,
    });
  });
  //top counter setup end

  //counter setup start faq
  $(document).ready(function () {
    $(".number span").counterUp({
      delay: 10,
      time: 3000,
    });
  });
  //counter setup end faq

  //blog2column slider start

  $(".wlslider").each(function () {
    console.log("jQuery loaded:", typeof $);
    const $slider = $(this);
    const slideCount = $slider.children().length;

    if (slideCount < 2) return;

    $slider.slick({
      autoplay: false,
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      adaptiveHeight: true,
      speed: 1500,
      fade: true,
      cssEase: "ease-in-out",
      prevArrow: $(".custom-prev"),
      nextArrow: $(".custom-next"),
    });
  });

  //blog2column slider end
});

