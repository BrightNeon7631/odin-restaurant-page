import createNewElement, { addToContainer } from './utils/element.js';
import '../style/nav.css';

export default function nav() {
  const content = document.getElementById('content');
  const mainNav = createNewElement('div', '', 'nav-container');
  const home = createNewElement('div', 'Home', 'color', 'home');
  const menu = createNewElement('div', 'Menu', undefined, 'menu');
  const contact = createNewElement('div', 'Contact', undefined, 'contact');

  addToContainer(mainNav, home, menu, contact);
  addToContainer(content, mainNav);
}