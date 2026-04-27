const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-button').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});