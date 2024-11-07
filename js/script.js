"use strict";

// add class active -----------
let navlinks = document.querySelectorAll(".header .ul-list li a");

navlinks.forEach((item) => {
  item.addEventListener(`click`, () => {
    document.querySelector(".header .ul-list li a.active").classList.remove("active");
    item.classList.add("active");
  });
});

// start carousel ------------
$(`document`).ready(() => {
  // carousel-card ----------------
  $(".carousel-card .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    nav: true,
    navText: [
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // goods-carousel ---------------
  $(".goods-carousel .owl-carousel").owlCarousel({
    stagePadding: 25,
    loop: true,
    margin: 15,
    autoplay: true,
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        stagePadding: 40,
        items: 1,
      },
      769: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });

  // our-partners -----------------
  $(".our-partners .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 1500,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      769: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
  //  ===========
});

// start footer_icon -------------
let footerIcon = document.querySelectorAll(".footer-icon li a");
footerIcon.forEach((li) => {
  li.addEventListener(`click`, () => {
    document.querySelector(".footer-icon a.active").classList.remove("active");
    li.classList.add("active");
  });
});
