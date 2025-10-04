// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Change the button text based on the mode
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️'; // Sun for Light Mode
  } else {
    darkModeToggle.textContent = '🌙'; // Moon for Dark Mode
  }
});

// Scroll-to-Top Button Visibility and Functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button when scrolled down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

// Scroll to the top of the page when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
