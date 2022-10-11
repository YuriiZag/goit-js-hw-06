const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListRef = document.querySelector('#ingredients');


const additionArray = []

for (const ingredient of ingredients) {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;

  additionArray.push(listItem);

};



ingredientsListRef.append(...additionArray);

console.log("ingredientsListRef", ingredientsListRef)