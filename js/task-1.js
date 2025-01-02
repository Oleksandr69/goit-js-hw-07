const itemCategories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${itemCategories.length}`);
itemCategories.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelectorAll('li').length}`);
});
