

const allTitles = document.querySelectorAll('.title');
console.log(`Number of categories: ${allTitles.length}`);
console.log('');

console.log(`Category: ${allTitles[0].textContent}`);
const animalsItem = document.querySelectorAll('.animals__item');
console.log(`Elements: ${animalsItem.length}`);
console.log('');

console.log(`Category: ${allTitles[1].textContent}`);
const productsItem = document.querySelector('.products');
console.log(`Elements: ${productsItem.children.length}`);
console.log('');

console.log(`Category: ${allTitles[2].textContent}`);
const technologiesItem = document.querySelector('.technologies');
console.log(`Elements: ${technologiesItem.children.length}`);



