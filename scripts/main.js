'use strict'
import { products } from "./api.js";
import * as slider from "./slider.js";
import * as nav from "./navbar.js";
import * as theme from "./switchTheme.js";
import * as filter from "./filter.js"

const productsList = products; 

const productsDiv = document.querySelector('.pro-container[attribute="api"]');




productsList.forEach(prd =>{


     let imageUrl = `https://clothickapi20240124181857.azurewebsites.net/${prd.image}`;
     let stars = 0; 
     let averageRating = 0;
     if (prd.productRatings && prd.productRatings.length > 0) {
        averageRating = prd.productRatings.reduce((acc, rating) => acc + rating.starRating, 0) / prd.productRatings.length;
    }
     if (prd.productRatings && prd.productRatings.length > 0) {
         stars = Array(Math.round(averageRating)).fill('<i class="fas fa-star"></i>').join('');
     }
   
 
    productsDiv.innerHTML += `
    <div class="pro" onclick="window.location.href='sproduct.html?productId=${prd.id}';">
        <img src="${imageUrl}" alt="${prd.brandName}">
      <div class="des">
       <span>${prd.brandName}</span>
      <h5>${prd.categoryName}</h5>
      <h4 class="productTitle">${prd.title}</h4>
      <div class="start"> 
      ${stars}
      </div>
      <h4>$${prd.price}</h4>
      </div>
      <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
    </div>
    `
})


