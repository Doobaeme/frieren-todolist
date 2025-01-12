// const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

function setBackgroundForAfterLogin() {
  const backgroundElement = document.getElementById("background");
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
  const chosenImage = images[Math.floor(Math.random() * images.length)];

  backgroundElement.style.opacity = "0";

  setTimeout(() => {
    backgroundElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/${chosenImage}')`;
    backgroundElement.style.opacity = "1";
  }, 1000);
}

if (savedUsername === null) {
  const backgroundElement = document.getElementById("background");
  backgroundElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('img/frieren.jpg')`;
} else {
  setBackgroundForAfterLogin();
  setInterval(setBackgroundForAfterLogin, 10000);
}
