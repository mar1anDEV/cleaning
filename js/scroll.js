document.addEventListener('DOMContentLoaded', function() {
    function liClicked(targetY) {
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  
    // Add event listeners to navigation links
    document.getElementById('services-link').addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.getElementById('services');
      const targetY = target.getBoundingClientRect().top + window.pageYOffset;
      liClicked(targetY);
    });
  
    document.getElementById('about-link').addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.getElementById('about');
      const targetY = target.getBoundingClientRect().top + window.pageYOffset;
      liClicked(targetY);
    });
  
    document.getElementById('contact-link').addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.getElementById('contact');
      const targetY = target.getBoundingClientRect().top + window.pageYOffset;
      liClicked(targetY);
    });
  });





  document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to the contact section
    function scrollToContact() {
      const contactSection = document.getElementById('contact');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  
    // Add event listeners to all "Jetzt beraten lassen" links with class 'scroll-to-contact'
    const scrollToContactLinks = document.querySelectorAll('.scroll-to-contact');
    scrollToContactLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        scrollToContact(); // Scroll to the contact section
      });
    });
  });
  
  