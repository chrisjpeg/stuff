// Array of image file paths for the slideshow
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0; // Start with the first image

// DOM elements for the slideshow
const slideshow = document.getElementById("slideshow");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Function to update the image source in the slideshow
function showImage(index) {
    slideshow.src = images[index];
}

// Event listeners for slideshow navigation buttons
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

// Function to reveal a love note message
function revealMessage(message) {
    const noteDisplay = document.getElementById("note-display");
    noteDisplay.textContent = message;
}
