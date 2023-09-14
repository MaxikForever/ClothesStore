const slider = document.querySelector("#slider");
const arrowRight = document.querySelector("#arrow-right")
const arrowLeft = document.querySelector("#arrow-left")
const themeModeSwitcher = document.querySelector("#dark-light-modes-switcher");
const sections = document.querySelectorAll("section");


const slides = [
    {
        id: 1,
        title: "crazy deals",
        slogan: "buy 1 get 1 free",
        description: "The best classic dress is on sale at cara",
        image: "https://wellness-trends.com/wp-content/uploads/2021/08/SH_ragazza_gonna_arancione.jpg.webp",
        buttonText: "Learn More",
    },
    {
        id: 2,
        title: "spring/summer",
        slogan: "upcoming season",
        description: "The best clothes are on sale at cara",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        buttonText: "Collection",
    },

]

if(slides.length % 2){
    alert("Number of slides must be even")
}

slider.style.width = `${slides.length * 1060}px`;

slides.forEach(slide => {
    slider.innerHTML += 
    `
        <div class = "slide" style="background-image: url(${slide.image});">
            <div class="banner-box">
                <h4>${slide.title}</h4>
                <h2>${slide.slogan}</h2>
                <span>${slide.description}</span>
                <button class="white">${slide.buttonText}</button>
            </div>
        </div>
    `
  
})

let positionX = 0; 

arrowLeft.style.display = "none"


arrowRight.addEventListener("click", () => {
    // if (positionX = slider.length * 350)
    positionX+=1060;

   checkArrows();

    slider.style.transform = `translateX(-${positionX}px)`;
})

arrowLeft.addEventListener("click", () => {

    positionX -=1060;

    checkArrows(); 

    slider.style.transform = `translateX(-${positionX}px)`;
})


function checkArrows() {
    arrowLeft.style.display = positionX === 0 ? "none" : "block";
    arrowRight.style.display =  (positionX === (slides.length - 1) * 1060) ? "none": "block";
}



// Theme switcher

themeModeSwitcher.addEventListener("click", () => {
    sections.forEach(section => {
        section.style.backgroundColor = "#000"
    })
})

