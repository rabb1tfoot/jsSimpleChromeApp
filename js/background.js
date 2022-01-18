const images = ["0.jfif", "1.jfif", "2.jfif"];

const img = document.createElement("img");

const rngimg = `images/${images[Math.floor(Math.random() * images.length)]}`;

img.src = rngimg;

document.body.appendChild(img);

