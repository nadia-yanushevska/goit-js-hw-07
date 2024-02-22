const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.childElementCount}`);

for (const category of categories.children) {
    const categoryTitle = category.querySelector('h2');
    const categoryList = category.querySelector('ul');

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryList.childElementCount}`);
}
