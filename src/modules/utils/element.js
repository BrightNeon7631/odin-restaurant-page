export default function createNewElement(element, textContent, className, idName) {
    const newElement = document.createElement(element);
    if (element === 'img') {
        newElement.src = textContent;
    } else if (textContent !== undefined) {
        newElement.textContent = textContent;
    }

    if (className !== undefined) {
        newElement.classList.add(className);
    }

    if (idName !== undefined) {
        newElement.id = idName;
    }

    return newElement;
};

export function createMenuItem(itemName, itemPrice, itemImage, imageCredit) {
    const newItem = createNewElement('div', '', 'item-container');
    addToContainer(
      newItem,
      createNewElement('h2', itemName, 'item-title'),
      createNewElement('img', itemImage),
      createNewElement('div', imageCredit, 'item-description'),
      createNewElement('h2', itemPrice, 'item-title')
    );

    return newItem;
}

export function addToContainer(container, ...elements) {
    elements.forEach((element) => container.appendChild(element));
}