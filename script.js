
const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

const slideshow = document.getElementById("slideshow");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function showImage(index) {
    slideshow.src = images[index];
}

prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

function revealMessage(message) {
    const noteDisplay = document.getElementById("note-display");
    noteDisplay.textContent = message;
}
