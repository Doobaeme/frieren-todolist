// const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
];

let currentIndex = 0;
const backgroundElement = document.getElementById("background");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateBackground(index) {
  backgroundElement.style.opacity = "0";
  setTimeout(() => {
    backgroundElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/${images[index]}')`;
    backgroundElement.style.opacity = "1";
  }, 1000);
}

prevButton.addEventListener("click", () => {
  if (savedUsername !== null) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground(currentIndex);
  }
});

nextButton.addEventListener("click", () => {
  if (savedUsername !== null) {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground(currentIndex);
  }
});

if (savedUsername === null) {
  backgroundElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/frieren.jpg')`;
  prevButton.style.display = "none";
  nextButton.style.display = "none";
} else {
  backgroundElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/${images[currentIndex]}')`;
  prevButton.style.display = "block";
  nextButton.style.display = "block";
}
