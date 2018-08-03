'use strict';

function main () {
  const loader = document.getElementById('load-wrapper');
  const latInput = document.getElementById('userPositionLat');
  if (loader) {
    loader.classList.add('loaded');
  }
  if (latInput) {
    getLocationOnSignup();
  }
  /** Init Swiper */
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    mousewheelControl: true,
    slidesPerView: 'auto',

    keyboard: {
      enabled: true
    },
    pagination: {
      el: '.swiper-pagination',
      draggable: true
    }
  });

  // const buddieProfile = document.getElementById('buddie-profile');
  const menuTrigger = document.getElementById('menu_trigger');
  const siteLogo = document.getElementById('site-logo');
  const menuContainer = document.getElementById('menu-container');

  siteLogo.addEventListener('click', () => {
    menuTrigger.classList.remove('open');
    menuContainer.classList.remove('open');
  });
  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('open');
    menuContainer.classList.toggle('open');
  });
}

window.addEventListener('load', main);

let dateInputs = document.querySelectorAll('.date-input');
let crd;
let intervalId;

dateInputs.forEach(function (input) {
  input.value = new Date().toJSON().slice(0, 10);
});

const getLocationOnSignup = () => {
  let latInput = document.getElementById('userPositionLat');
  if (latInput) {
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    intervalId = setInterval(() => {
      checkCrd(crd);
    }, 300);
  }
};

function checkCrd (data) {
  if (data) {
    const latitude = data.latitude;
    const longitude = data.longitude;

    document.getElementById('userPositionLat').value = latitude;
    document.getElementById('userPositionLon').value = longitude;

    // document.getElementById('signup-button').disabled = false;
    clearInterval(intervalId);
  }
};

function error (err) {
  console.error('ERROR(' + err.code + '): ' + err.message);
};

function success (pos) {
  crd = pos.coords;
};
