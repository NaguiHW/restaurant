/*global document*/

import './style.css';
import { aboutUsPage } from './aboutUs';
import { restaurantMenuPage } from './restaurantMenu';
import { locationPage } from './location';
import { schedulePage } from './schedule';
import './img/aboutUsImg.jpg';
import './img/locationImg.png';

const mainPage = (() => {
  const content = document.getElementById('content');
  const title = document.createElement('h1');
  const webMenu = document.createElement('div');
  const aboutUs = document.createElement('div');
  const restaurantMenu = document.createElement('div');
  const location = document.createElement('div');
  const schedule = document.createElement('div');
  const body = document.createElement('div');

  let createTitle = () => {
    title.innerHTML = 'Sushi House';
    title.classList.add('main-title');
    content.appendChild(title);
  };

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
  };

  const loadTab = (event) => {
    body.innerHTML = '';
    if (event.target.innerHTML === 'About Us') {
      aboutUsPage.generate(body);
    } else if (event.target.innerHTML === 'Menu') {
      restaurantMenuPage.generate(body);
    } else if (event.target.innerHTML === 'Location') {
      locationPage.generate(body);
    } else if (event.target.innerHTML === 'Schedule') {
      schedulePage.generate(body);
    }
  };

  let addAction = () => {
    aboutUs.addEventListener('click', loadTab);
    restaurantMenu.addEventListener('click', loadTab);
    location.addEventListener('click', loadTab);
    schedule.addEventListener('click', loadTab);
  };

  let loadBody = () => {
    body.classList.add('body');
    content.appendChild(body);
  };

  const load = () => {
    createTitle();
    createMenu();
    addAction();
    loadBody();
    aboutUsPage.generate(body);
  };

  return { load };
})();

mainPage.load();