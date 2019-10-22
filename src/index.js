import './style.css';
import { aboutUsPage } from './aboutUs';
import { restaurantMenuPage } from './restaurantMenu';
import { locationPage } from './location';
// import { schedulePage } from './schedule';

let mainPage = (()=> {
  let content = document.getElementById('content');
  let title = document.createElement('h1');
  let webMenu = document.createElement('div');
  let aboutUs = document.createElement('div');
  let restaurantMenu = document.createElement('div');
  let location = document.createElement('div');
  let schedule = document.createElement('div');
  let body = document.createElement('div');

  let load = () => {
    createTitle();
    createMenu();
    addAction();
    loadBody();
    aboutUsPage.generate(body);
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
    schedule.classList.add('tab');
    aboutUs.innerHTML = 'About Us';
    restaurantMenu.innerHTML = 'Menu';
    location.innerHTML = 'Location';
    schedule.innerHTML = 'Schedule';
    webMenu.appendChild(aboutUs);
    webMenu.appendChild(restaurantMenu);
    webMenu.appendChild(location);
    webMenu.appendChild(schedule);
    content.appendChild(webMenu);
  }

  let loadTab = event => {
    body.innerHTML = '';
    if (event.target.innerHTML === 'About Us') {
      aboutUsPage.generate(body);
    } else if (event.target.innerHTML === 'Menu') {
      restaurantMenuPage.generate(body);
    } else if (event.target.innerHTML === 'Location') {
      locationPage.generate(body);
    } else if (event.target.innerHTML === 'Schedule') {
      body.innerHTML = 'Schedule'
    }
  }

  let addAction = () => {
    aboutUs.addEventListener('click', loadTab);
    restaurantMenu.addEventListener('click', loadTab);
    location.addEventListener('click', loadTab);
    schedule.addEventListener('click', loadTab);
  }
  
  let loadBody = () => {
    body.classList.add('body');
    content.appendChild(body);
  }

  return {load}
})();

mainPage.load();