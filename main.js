  // Function to handle fade-in effect on scroll
  document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });
