"use strict";

//! ********** CONSTANTS  **********

const slides = [
	{
		"image":"slide1.jpg",
		"text":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"text":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"text":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"text":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const image = document.querySelector(".banner-img");
  // console.log(image);
const text = document.querySelector("#banner p");
  // console.log(texte);

const leftArrowElement = document.querySelector(".arrow_left"); // const arrowLeft = document.querySelector(".arrow_left");
  // console.log(arrowLeft);
const rightArrowElement = document.querySelector(".arrow_right"); // const arrowRight = document.querySelector(".arrow_right");
  // console.log(arrowRight);

const dots = document.querySelectorAll(".dots");
const Length = slides.length;
  console.log(Length);
const URL = "./assets/images/slideshow/";

//! ********** VARIABLES **********
let i = 0; // index du slide courant
let allDots ;

//! ********** FUNCTIONS **********

/***** Generating four "dot"s *****/
const updateDots = () => {
  for (let j = 0; j < allDots.length; j++) {
    allDots[j].classList.remove("dot_selected");  
  }
  allDots[j].classList.add("dot_selected");
}

const updateSlider = () => {
  image.setAttribute("src", URL + slides[i].image);
  text.innerHTML = slides[i].text;

  updateDots();
}

const addDots = () => {
  slides.forEach(() => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
  });
  allDots = document.getElementsByClassName("dot");
  document.querySelector(".dot").classList.add("dot_selected");
}

/***** Generating four "dot"s *****/

/***** fonction de mise à jour du slider *****/


/***** fonction de navigation dans un slider *****/
const slideLeft = () => {
  i = (i + Length -1) % Length;

  updateSlider();   
}
const slideRight = () => {
  i = (i + 1) % Length;

  updateSlider();
}

const addListeners = () => {
rightArrowElement.addEventListener("click", () => slideRight());
leftArrowElement.addEventListener("click", () => slideLeft());
}


/*** fonction updateStyle de la mise à jour des dots de la diapositive active ***/



/*** fonction updateSlider de la mise à jour de l'image de la diapositive active ***/


/*** fonction updateText de la mise à jour du texte de la diapositive active ***/
//! ********** MAIN **********
addListeners();
addDots();
updateSlider(); // Initialisation et mise à jour du slider



// for (let i = 0; i < slides.length; i++) {
//   let newElement = document.createElement("div");
//   newElement.classList.add("dot");
//   document.querySelector(".dots").appendChild(newElement);
// }