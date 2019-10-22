import './style.css';
import { aboutUs } from './aboutUs';
import { restaurantMenu } from './restaurantMenu';
import { location } from './location';
import { schedule } from './schedule';

let mainPage = (()=> {
  let content = document.getElementById('content');
  let title = document.createElement('h1');
  let webMenu = document.createElement('div');
  let aboutUs = document.createElement('div');
  let restaurantMenu = document.createElement('div');
  let location = document.createElement('div');
  let schedule = document.createElement('div');

  let load = () => {
    createTitle();
    createMenu();
    addAction();
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
    schedule.innerHTML = 'schedule';
    webMenu.appendChild(aboutUs);
    webMenu.appendChild(restaurantMenu);
    webMenu.appendChild(location);
    webMenu.appendChild(schedule);
    content.appendChild(webMenu);
  }

  let addAction = () => {
    aboutUs.addEventListener('click', aboutUs.generate);
    restaurantMenu.addEventListener('click', restaurantMenu.generate);
    locaion.addEventListener('click', locaion.generate);
    schedule.addEventListener('click', schedule.generate);
  }

  return {load}
})();

mainPage.load();