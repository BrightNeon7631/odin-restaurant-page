import createNewElement, { 
  createMenuItem, 
  addToContainer 
} from './utils/element.js';
import sushiItem1 from '../assets/sushi-item1.jpg';
import sushiItem2 from '../assets/sushi-item2.jpg';
import sushiItem3 from '../assets/sushi-item3.jpg';
import '../style/menu.css';

export default function menuPage() {
  const content = document.getElementById('content');
  const mainBox = createNewElement('div', undefined, undefined, 'main-container');

  const item1 = createMenuItem(
    'Hosomaki',
    '$20',
    sushiItem1,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );

  const item2 = createMenuItem(
    'Uramaki',
    '$30',
    sushiItem2,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );

  const item3 = createMenuItem(
    'Nigiri',
    '$40',
    sushiItem3,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  
  addToContainer(mainBox, createNewElement('h1', 'Menu'), item1, item2, item3);
  addToContainer(content, mainBox);
}