// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            const offset = targetSection.offsetTop;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
});
