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
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });

  const buddieProfile = document.getElementById('buddie-profile');
  console.log(buddieProfile);
  if (buddieProfile) {
    //validateDate();
  }
  function validateDate () {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
      input.value = moment().format('YYYY-MM-DD');
    });
  
    document.getElementById('book-buddy').addEventListener('click', function () {
      const from = document.getElementById('startDate').value;
      const to = document.getElementById('endDate').value;
  
      if (moment(from).isAfter(moment(to))) {
        console.log('end date must be higher than start date');
        return false;
      }
    });
  }
}

window.addEventListener('load', main);


