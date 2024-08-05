function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide the scroll-to-top button based on scroll or touch events
let scrollTimeout;
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
let scrollButton = document.querySelector('.scroll-to-top');

function handleScroll() {
  if (isTouchDevice) {
    // For touch devices, hide after 1 second of no interaction
    scrollButton.style.display = 'block';

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      scrollButton.style.display = 'none';
    }, 1000); // Adjust the time (in milliseconds) after which the arrow should disappear after no interaction
  } else {
    // For non-touch devices, always show the scroll-to-top button
    scrollButton.style.display = 'block';
  }
}

function handleTouchStart() {
  if (isTouchDevice) {
    // For touch devices, show and hide the arrow as per interaction
    scrollButton.style.display = 'block';

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      scrollButton.style.display = 'none';
    }, 3000); // Adjust the time (in milliseconds) after which the arrow should disappear after no interaction
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('touchstart', handleTouchStart);
