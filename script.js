
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
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
