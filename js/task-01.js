const categoriesList = document.querySelector("#categories");
const itemList = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemList.length}`);

itemList.forEach((item) => {
    const nameCategory = item.querySelector("h2").textContent;
    const element = item.querySelectorAll("li").length;

    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${element}`);
    
    
})