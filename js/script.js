// script.js
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Add form validation and other interactive features here