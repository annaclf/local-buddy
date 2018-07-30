'use strict';

function main() {

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheelControl: true,
    pagination: {
      el: '.swiper-pagination',
      draggable:true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  });

  const dateInputs = document.querySelectorAll('input[type="date"]');
  dateInputs.forEach(input => {
    input.value = moment().format('YYYY-MM-DD');
  });

}

window.addEventListener('load', main);