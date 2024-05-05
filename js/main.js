document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll behavior for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Navigation active link highlighting
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Toggle navigation menu on mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });

  // Add scroll-to-top button behavior
  const scrollToTopBtn = document.querySelector('.scroll-to-top');
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
});
