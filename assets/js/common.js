// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", () => {

  // top-to-btn start
    // const topBtn = document.querySelector(".top-to-btn");

    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 200) {
    //     topBtn.classList.remove("hide");
    //   } else {
    //     topBtn.classList.add("hide");
    //   }
    // });

    // topBtn.addEventListener("click", () => {window.scrollTo({top: 0,behavior: "smooth",});
    // });

  // top-to-btn end

  // top about me start
  // top about me end

  //carea top and history start
  const headings = document.querySelectorAll(".lower-carea-h4");
  const panels = document.querySelectorAll(".lower-carea-panel");

  headings.forEach((heading) => {
    heading.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetPanel = document.getElementById(targetId);

      if (this.classList.contains("active")) return;

      // Remove active from all
      headings.forEach((h) => h.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      // Activate selected
      this.classList.add("active");
      targetPanel.classList.add("active");
    });
  });
  // carea top and history end

  // doctor start
  const message = document.querySelector(".consultancy-right-lower");
  const toggleButtons = document.querySelectorAll(".doctor-btn, .contact-btn");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      message.classList.toggle("show");
    });
  });
  // doctor end

  //hamburger start

  setTimeout(function () {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const closeBtn = document.getElementById("closeSidebar");
    const submenuArrow = document.getElementById("submenuArrow");
    const submenu = document.getElementById("submenu");
    const submenuToggle = document.getElementById("submenuToggle");
    const sidebarLinks = document.querySelectorAll(
      ".sidebar-link, .submenu-link"
    );

    // Hamburger toggle
    if (hamburger) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        sidebar?.classList.toggle("active");
        overlay?.classList.toggle("active");

        // Toggle body scroll
        document.body.classList.toggle("no-scroll");
      });
    }

    // Close sidebar
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        sidebar?.classList.remove("active");
        overlay?.classList.remove("active");
        hamburger?.classList.remove("active");

        // Remove no-scroll
        document.body.classList.remove("no-scroll");
      });
    }

    // Overlay click
    if (overlay) {
      overlay.addEventListener("click", () => {
        sidebar?.classList.remove("active");
        overlay.classList.remove("active");
        hamburger?.classList.remove("active");

        // Remove no-scroll
        document.body.classList.remove("no-scroll");
      });
    }

    // Submenu toggle
    if (submenuArrow && submenu) {
      submenuArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
        submenuArrow.classList.toggle("rotate");
      });
    }

    // Highlight current page link and parent submenu
    const currentPath = window.location.pathname.split("/").pop();

    sidebarLinks.forEach((link) => {
      const linkPath = link.getAttribute("href");
      if (
        linkPath === currentPath ||
        (linkPath === "index.html" && currentPath === "")
      ) {
        link.classList.add("active");

        // If it's a submenu link, also highlight the parent menu
        if (link.classList.contains("submenu-link")) {
          submenuToggle.classList.add("active");
          submenuArrow.classList.add("active");
        }
      } else {
        link.classList.remove("active");
      }
    });
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
})
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
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // ads slider end

  // top slider start
  $(document).ready(function () {
    $(".top-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow: ".next",
      nextArrow: ".prev",
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
      cssEase: "ease",
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            prevArrow: false,
            nextArrow: false,
          },
        },
      ],
    });
  });
  // top slider end

  //counter setup start faq
  $(document).ready(function () {
    const numEle = $(".num span");
    if (numEle) {
      $(".num span").counterUp({
        delay: 10,
        time: 3000,
      });
    }
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
