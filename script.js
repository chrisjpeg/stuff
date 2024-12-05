
// Array of image file paths for the slideshow
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

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
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Set the initial image explicitly
showImage(currentIndex);

// Function to reveal a love note message
function revealMessage(message) {
    const noteDisplay = document.getElementById("note-display");
    noteDisplay.textContent = message;
    noteDisplay.classList.add("active");
    setTimeout(() => noteDisplay.classList.remove("active"), 2000); // Reset after fade-out

    // Play sound effect
    const audio = new Audio("click-sound.mp3"); // Add your sound file
    audio.play();
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Random Quote Display in Header
const quotes = [
    "you light up my world",
    "im so lucky to have you",
    "every hour with you is like a second"
];

window.addEventListener("load", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".glow-header h1").textContent = randomQuote;
});
