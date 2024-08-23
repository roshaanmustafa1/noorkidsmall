document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

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

    swiper.update();
  });
});

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
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
