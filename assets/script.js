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
const texte = document.querySelector("#banner p");
  // console.log(texte);

const arrowLeft = document.querySelector(".arrow_left");
  // console.log(arrowLeft);
const arrowRight = document.querySelector(".arrow_right");
  // console.log(arrowRight);


/***** Generating four "dot"s *****/
for (let i = 0; i < slides.length; i++) {
  let newElement = document.createElement("div");
  newElement.classList.add("dot");
  document.querySelector(".dots").appendChild(newElement);
}






const LENGTH = slides.length ;
const URL = "./assets/images/slideshow/";
  console.log(URL);



const text = document.querySelector("#banner p");
  console.log(text);
const dots = document.querySelector(".dots");
  console.log(dots);

//! ********** VARIABLES **********

let  i = 0 ;

//! ********** FUNCTIONS **********

const slideLeft = () => (i - 1 + LENGTH) % LENGTH;
const slideRight = () => (i + 1) % LENGTH;

const addListeners = () => {
  arrowLeft.addEventListener("click", slideLeft);
  arrowRight.addEventListener("click", slideRight);
}

/*** fonction updateStyle de la mise à jour des dots de la diapositive active ***/

const updatedots = () => {
  for (let j = 0; j < LENGTH; j++) {
    dots.children[j].classList.remove("active");
  }
  allDots[i].classList.add("active");
}

/*** fonction updateSlider de la mise à jour de l'image de la diapositive active ***/


/*** fonction updateText de la mise à jour du texte de la diapositive active ***/
//! ********** MAIN **********

addListeners();
// addDots();
updateSlider(); // Initialisation et mise à jour du slider
