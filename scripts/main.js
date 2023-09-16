'use strict'
import { products } from "./api.js";
const productsList = products; 

console.log(productsList)
// call every element from productList
console.log(productsList.length)
const productsDiv = document.getElementById("products");
for (let i=0 ;i<productsList.length; ++i)  // for each item in the array, do this:  
{
    productsDiv.innerHTML += `
    <p>a</p>
    <div class="product">
        <img src="${productsList[i].image}" alt="${productsList[i].title}">
        <h3>${productsList[i].title}</h3>
        <p>${productsList[i].description}</p>
        <p>${productsList[i].price}</p>
    </div>
    `
}


// const products = [];

// async function getApiData() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();

//         data.forEach(product => {
//             products.push(product);
//         });


//     } catch (error) {
//         console.log("error", error);
//     }
// }

// await getApiData();
// export { products };
