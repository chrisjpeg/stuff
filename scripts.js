
let currentSlide = 0;
function changeSlide(index) {
  const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('button');
  const offset = -index * 100;

  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.replace('bg-pink-500', 'bg-pink-200'));
  dots[index].classList.replace('bg-pink-200', 'bg-pink-500');

  currentSlide = index;
}
