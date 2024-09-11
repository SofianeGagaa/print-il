"use strict";

//! ********** CONSTANTS  **********

const slides = [
  {
    "image": "slide1.jpg",
    "text": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "text": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "text": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "text": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
]

const image = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");

const leftArrowElement = document.querySelector(".arrow_left");
const rightArrowElement = document.querySelector(".arrow_right");

const dots = document.querySelector(".dots");

const LENGTH = slides.length;
const URL = "./assets/images/slideshow/";

//! ********** VARIABLES **********

let currentSlide = 0;
let allDots;

//! ********** FUNCTIONS **********

/**
 * Mise à jour de la classe "dot_selected" sur le élément qui correspond à l'index i.
 * Supprime la classe "dot_selected" sur tous les éléments de la liste allDots.
 * Ajoute la classe "dot_selected" sur l'élément de la liste allDots correspondant à l'index i.
 */
const updateDots = () => {
  for (let j = 0; j < LENGTH; j++) {
    allDots[j].classList.remove("dot_selected");
  }
  allDots[currentSlide].classList.add("dot_selected");
}

/**
 * Mise à jour du slider en fonction de l'index i.
 * Met à jour l'image et le texte du slider.
 * Appelle updateDots pour mettre à jour les dots.
 */
const updateSlider = () => {
  image.setAttribute("src", URL + slides[currentSlide].image);
  text.innerHTML = slides[currentSlide].text;

  updateDots();
}

/**
 * Génère les éléments "dots" du slider.
 * Crée un élément "span" pour chaque slide dans le tableau slides.
 * Ajoute la classe "dot" à chaque élément.
 * Ajoute chaque élément à la liste des enfants de l'élément "dots".
 * Stocke la liste des éléments "dots" dans la variable allDots.
 * Ajoute la classe "dot_selected" au premier élément de la liste allDots.
 */
const addDots = () => {
  slides.forEach(() => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dots.appendChild(dot);
  });
  allDots = document.getElementsByClassName("dot");
  document.querySelector(".dot").classList.add("dot_selected");
}

/**
 * Décrémente l'index i de 1 et met à jour l'image et le texte du diaporama.
 * L'index revient à la fin du tableau slides si il devient négatif.
 * Les points de navigation du diaporama sont également mis à jour pour refléter le nouvel index.
 */

const slideLeft = () => {
  currentSlide = (currentSlide + LENGTH - 1) % LENGTH;

  updateSlider();
}

/**
* Augmente l'index i de 1, met à jour l'image et le texte du diaporama. * * L'index revient au début de l'array de diapositives si il atteint la longueur de l'array. Les points du diaporama sont également mis à jour pour refléter l'index actuel.
 */

const slideRight = () => {
  currentSlide = (currentSlide + 1) % LENGTH;

  updateSlider();
}

/**
* Ajoute deux écouteurs d'événements aux éléments de flèche gauche et droite.
* L'écouteur d'événement de la flèche gauche appelle la fonction slideLeft lorsqu'il est cliqué.
L* 'écouteur d'événement de la flèche droite appelle la fonction slideRight lorsqu'il est cliqué
 */

const addListeners = () => {
  rightArrowElement.addEventListener("click",  slideRight);
  leftArrowElement.addEventListener("click",  slideLeft);
}

//! ********** MAIN **********

addListeners();
addDots();
updateSlider();
