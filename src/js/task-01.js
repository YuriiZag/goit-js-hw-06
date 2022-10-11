const categoriesList = document.querySelector('#categories');
const categoriesListItem = document.querySelectorAll('#categories .item');



console.log(`Number of categories: ${categoriesList.children.length}`);

for (const item of categoriesListItem) {
    console.log(`Category: ${item.children[0].textContent}`)
    console.log(`Elements: ${item.children[1].children.length}`)
 }    

