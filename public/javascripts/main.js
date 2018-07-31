'use strict';

function main () {
  /** Init Swiper */
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

  /**Esto es para hacer la validación de las fechas del calendario */

  // if (buddieProfile) {
  //   validateDate();
  // }
  // function validateDate () {
  //   const dateInputs = document.querySelectorAll('input[type="date"]');
  //   dateInputs.forEach(input => {
  //     input.value = moment().format('YYYY-MM-DD');
  //   });
  //   document.getElementById('book-buddy').addEventListener('click', function () {
  //     const from = document.getElementById('startDate').value;
  //     const to = document.getElementById('endDate').value;
  //     if (moment(from).isAfter(moment(to))) {
  //       console.log('end date must be higher than start date');
  //       return false;
  //     }
  //   });
  // }
  
  const buddieProfile = document.getElementById('buddie-profile');
  const menuTrigger = document.getElementById('menu_trigger');
  const menuContainer = document.getElementById('menu-container');

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('open');
    menuContainer.classList.toggle('open');
  });

}

window.addEventListener('load', main);


const App = {
  
  clickmenu : () => {
    this.menuTrigger.addEventListener('click', () => {
      this.menuTrigger.classList.toggle('open');
      this.menuContainer.classList.toggle('open');
    });
  }
};
