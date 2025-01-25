const glide = new Glide(".glide", {
  type: "carousel",
  perView: 4,
  breakpoints: {
    1200: {
      perView: 3,
    },
    992: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
    576: {
      perView: 1,
    },
  },
});

glide.mount();
