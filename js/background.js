// const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const backgroundElement = document.getElementById("slider-container");
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function handlePrevClick() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

function handleNextClick() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function initializeBackground() {
  if (savedUsername === null) {
    backgroundElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/frieren.jpg')`;
    backgroundElement.style.backgroundRepeat = "no-repeat";
    backgroundElement.style.backgroundSize = "cover";
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    slider.style.display = "none";
  } else {
    backgroundElement.style.backgroundImage = "none";
    slider.style.display = "flex";
    updateSlider();
    prevButton.style.display = "block";
    nextButton.style.display = "block";

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);
  }
}

initializeBackground();
