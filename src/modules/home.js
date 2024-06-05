import createNewElement, { addToContainer } from './utils/element.js';
import SushiImg from '../assets/sushi.jpg';

export default function mainPage() {
  const content = document.getElementById('content');
  const mainBox = createNewElement('div', undefined, undefined, 'main-container');
  const sushi = createNewElement('img', SushiImg);
  const description = createNewElement('div', '', 'description');
  
  addToContainer(
    description,
    createNewElement('h1', 'About Us'),
    createNewElement(
      'div',
      `Best sushi money can buy. Or is it? Don't wait and come in to find out.`
    )
  );

  const hoursMain = createNewElement('div', '', 'hours-main');
  const hoursBox = createNewElement('div', '', 'hours-box');
  const hoursArray = [
    `Sunday: closed`,
    `Monday: 9am - 10pm`,
    `Tuesday: 9am - 10pm`,
    `Wednesday: 9am - 10pm`,
    `Thursday: 9am - 10pm`,
    `Friday: 9am - 10pm`,
    `Saturday: 10am - 10pm`,
  ];

  for (let i = 0; i < hoursArray.length; i++) {
    addToContainer(hoursBox, createNewElement('div', hoursArray[i]));
  }

  addToContainer(hoursMain, createNewElement('h1', 'Opening Hours'), hoursBox);
  addToContainer(mainBox, createNewElement('h1', 'Sushi Restaurant'), sushi, description, hoursMain);
  addToContainer(content, mainBox);
}