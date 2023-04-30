const images = ["sea2.png","sea3.jpg", "sea4.png"];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = `img/${chosenImage}`;

document.body.style.backgroundImage = `url(${bgImage})`;
  