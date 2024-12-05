let currentSlide = 0;

// Function to change the slide
function changeSlide(index) {
  const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('button');
  const totalSlides = carousel.children.length;

  // Ensure the index is within bounds
  currentSlide = (index + totalSlides) % totalSlides;

  // Move the carousel to the new slide
  const offset = -currentSlide * 100;
  carousel.style.transform = `translateX(${offset}%)`;

  // Update the active dot
  dots.forEach(dot => dot.classList.replace('bg-pink-500', 'bg-pink-200'));
  dots[currentSlide].classList.replace('bg-pink-200', 'bg-pink-500');
}

// Function to create floating hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Generate hearts every 300ms
setInterval(createFloatingHeart, 300);
