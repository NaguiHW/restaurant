import './style.css'

let mainPage = (()=> {
  let content = document.getElementById('content');
  let title = document.createElement('h1');
  let webMenu = document.createElement('div');
  let aboutUs = document.createElement('div');
  let restaurantMenu = document.createElement('div');
  let location = document.createElement('div');
  let reservation = document.createElement('div');

  let load = () => {
    createTitle();
    createMenu();
  }
  
  let createTitle = () => {
    title.innerHTML = `Sushi's House`;
    title.classList.add('main-title');
    content.appendChild(title);
  }

  let createMenu = () => {
    webMenu.classList.add('menu');
    aboutUs.classList.add('tab');
    restaurantMenu.classList.add('tab');
    location.classList.add('tab');
    reservation.classList.add('tab');
    aboutUs.innerHTML = 'About Us';
    restaurantMenu.innerHTML = 'Menu';
    location.innerHTML = 'Location';
    reservation.innerHTML = 'Reservation';
    webMenu.appendChild(aboutUs);
    webMenu.appendChild(restaurantMenu);
    webMenu.appendChild(location);
    webMenu.appendChild(reservation);
    content.appendChild(webMenu);
  }

  return {load}
})();

mainPage.load();