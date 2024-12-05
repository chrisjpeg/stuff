// Array of image file paths
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0; // Start with the first image

// DOM elements
const slideshow = document.getElementById("slideshow");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Function to update the image source
function showImage(index) {
    slideshow.src = images[index];
}

// Event listeners for navigation buttons
prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
    showImage(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the first image
    showImage(currentIndex);
});

// Set the initial image explicitly
showImage(currentIndex);
