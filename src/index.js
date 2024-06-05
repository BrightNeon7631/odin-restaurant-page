import './style/index.css'
import nav from './modules/nav.js';
import mainPage from './modules/home.js';
import menuPage from './modules/menu.js';
import contactPage from './modules/contact.js';

nav();
mainPage();

document.getElementById('home').addEventListener('click', function () {
  document.getElementById('main-container').remove();
  document.getElementById('home').className = 'color';
  document.getElementById('menu').className = '';
  document.getElementById('contact').className = '';
  mainPage();
});

document.getElementById('menu').addEventListener('click', function () {
  document.getElementById('main-container').remove();
  document.getElementById('menu').className = 'color';
  document.getElementById('home').className = '';
  document.getElementById('contact').className = '';
  menuPage();
});

document.getElementById('contact').addEventListener('click', function () {
  document.getElementById('main-container').remove();
  document.getElementById('contact').className = 'color';
  document.getElementById('home').className = '';
  document.getElementById('menu').className = '';
  contactPage();
});
