const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul[id=ingredients]');
list.classList.add('ingredients');

const items = ingredients.map (element => {
  
const itemEl = document.createElement('li');

itemEl.classList.add('item');
itemEl.textContent = element;

return itemEl;
})

list.append(...items);

console.log(list);




