'use strict'
import { products } from "./api.js";
import * as slider from "./slider.js"
import * as nav from "./navbar.js"

const productsList = products; 

const productsDiv = document.querySelector('.pro-container[attribute="api"]');



productsList.forEach(prd =>{
    if(prd.category == 'electronics' || prd.category == `jewelery`){
        return
    }
    const stars = Array(Math.round(prd.rating.rate)).fill('<i class="fas fa-star"></i>').join('');
    productsDiv.innerHTML += `
    <div class="pro">
        <img src="${prd.image}" alt="${prd.title}">
      <div class="des">
      <span>${prd.category}</span>
      <h5>${prd.title}</h5>
      <div class="start"> 
        ${stars}
      </div>
      <h4>${prd.price}$</h4>
      </div>
      <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    </div>
    `
})
