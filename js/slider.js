const slides = document.querySelectorAll('.slide');
const slideInterval = 3000; // Change slide every 3 seconds

let currentSlide = 0;
const nextSlide = () => {
  slides[currentSlide].style.opacity = '0';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = '1';
};

slides[currentSlide].style.opacity = '1';
setInterval(nextSlide, slideInterval);
