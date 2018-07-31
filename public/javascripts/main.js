'use strict';

function main () {
  /** Init Swiper */
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheelControl: true,
    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      draggable: true
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
  // const buddieProfile = document.getElementById('buddie-profile');
  const menuTrigger = document.getElementById('menu_trigger');
  const menuContainer = document.getElementById('menu-container');

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('open');
    menuContainer.classList.toggle('open');
  });
  
}

window.addEventListener('load', main);

// const App = {
//   clickmenu : () => {
//     this.menuTrigger.addEventListener('click', () => {
//       this.menuTrigger.classList.toggle('open');
//       this.menuContainer.classList.toggle('open');
//     });
//   }
// };

/* Esto es para hacer la validación de las fechas del calendario */
