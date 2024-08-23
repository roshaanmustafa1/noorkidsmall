document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to the clicked button
    button.classList.add("active");

    // Get the filter value from the clicked button
    const filter = button.getAttribute("data-filter");

    // Filter the slides
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      if (
        filter === "all" ||
        slide.getAttribute("data-category") === filter ||
        slide.getAttribute("data-sale") === filter
      ) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    // Update Swiper after filtering
    swiper.update();
  });
});

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".swiper-slide").forEach((slide) => {
      if (
        filter === "all" ||
        slide.getAttribute("data-category") === filter ||
        slide.getAttribute("data-sale") === filter
      ) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    swiper.update(); // Update Swiper after filtering
  });
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal", // You can use 'vertical' instead
  loop: true, // Enable looping

  // If you want pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000, // Slide delay in ms
    disableOnInteraction: false, // Autoplay will not be disabled after interactions
  },

  // Set number of slides to show
  slidesPerView: 4, // Show 4 slides at a time
  spaceBetween: 30, // Space between slides in px
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// review slider javascript

const swiper2 = new Swiper(".swiper-container-second", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-second",
    prevEl: ".swiper-button-prev-second",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
const swiper3 = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-third",
    prevEl: ".swiper-button-prev-third",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
});
