const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    draggable:true
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});