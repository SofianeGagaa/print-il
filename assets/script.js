"use strict";

//! ********** CONSTANTS  **********

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const LENGTH = slides.length ;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const img = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");
const dots = document.querySelector(".dots");

//! ********** VARIABLES **********

let index = 0 ;

//! ********** FUNCTIONS **********

const slideLeft = () => (index - 1 + LENGTH) % LENGTH;
const slideRight = () => (index + 1) % LENGTH;

const addListeners = () => {
  arrowLeft.addEventListener("click", slideLeft);
  arrowRight.addEventListener("click", slideRight);
}

//! ********** MAIN **********

addListeners();
