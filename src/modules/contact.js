import createNewElement, { addToContainer } from './utils/element.js';
import sushi2 from '../assets/sushi2.jpg';

export default function contactPage() {
  const content = document.getElementById('content');
  const mainBox = createNewElement('div', undefined, undefined, 'main-container');
  const sushi = createNewElement('img', sushi2);
  const description = createNewElement('div', '', 'description');
  
  addToContainer(
    description,
    createNewElement('h1', 'Email & Phone'),
    createNewElement('div', `somemail@thatisntreal.com 123-456-789`),
    createNewElement('h1', 'Restaurant Address'),
    createNewElement('div', `Sushi Restaurant`),
    createNewElement('div', `Some Street 1`),
    createNewElement('div', `City`)
  );

  addToContainer(mainBox, createNewElement('h1', 'Contact'), sushi, description);
  addToContainer(content, mainBox);
}