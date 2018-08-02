'use strict';

function main () {
  const loader = document.getElementById('load-wrapper');
  if (loader) {
    loader.classList.add('loaded');
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

let dateInputs = document.querySelectorAll('.date-input');

dateInputs.forEach(function (input) {
  input.value = new Date().toJSON().slice(0, 10);
});

window.addEventListener('load', main);


// window.onload = () => {
//   var options = {
//     enableHighAccuracy: true,
//     timeout: 10000,
//     maximumAge: 0
//   };

//   let crd;
//   function success (pos) {
//     crd = pos.coords;

//     console.log('Your current position is:');
//     console.log('Latitude : ' + crd.latitude);
//     console.log('Longitude: ' + crd.longitude);
//     console.log('More or less ' + crd.accuracy + ' meters.');
//   };

//   function error (err) {
//     console.error('ERROR(' + err.code + '): ' + err.message);
//   };

//   navigator.geolocation.getCurrentPosition(success, error, options);

//   function checkCrd (data) {
//     if (data) {
//       const latitude = data.latitude;
//       const longitude = data.longitude;

//       document.getElementById('userPositionLat').value = latitude;
//       document.getElementById('userPositionLon').value = longitude;

//       // document.getElementById('signup-button').disabled = false;
//       clearInterval(intervalId);
//     }
//   };

//   let intervalId = setInterval(() => {
//     checkCrd(crd);
//   }, 300);
// };

// MAPBOX-------------------------

// window.onload = () =>{
//   mapboxgl.accessToken = 'pk.eyJ1IjoiaGNvcnRhIiwiYSI6ImNqa2N5ZGdsbjBicHUzcG8wNXEycG4xa3EifQ.L806Ib3WtffrlfOnIf-dcA';
//   let map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 14
//   });
// }


// let center;
// if (navigator.geolocation) {
//   // Get current position
//   // The permissions dialog will popup
//   navigator.geolocation.getCurrentPosition(function (position) {
//     // Create an object to match
//     // google's Lat-Lng object format
//     center = [position.coords.longitude, position.coords.latitude];
//     map.setCenter(center);

//     console.log('center: ', center);
//     // User granted permission
//     // Center the map in the position we got
//   }, function () {
//     // If something else goes wrong
//     console.log('Error in the geolocation service.');
//   });
// } else {
//   // Browser says: Nah! I do not support this.
//   console.log('Browser does not support geolocation.');
// }

