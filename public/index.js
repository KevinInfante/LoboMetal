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

const form = document.querySelector('form');
form.addEventListener('submit', sendMail);

function sendMail(e) {
  e.preventDefault();

  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const phone = document.querySelector('input[type="tel"]').value;
  const message = document.querySelector('textarea').value;

  const subject = encodeURIComponent("Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:CMADRID742@GMAIL.COM?subject=${subject}&body=${body}`;

  // fallback message
  setTimeout(() => {
    alert("If your email app didn’t open, please email us at: CMADRID742@GMAIL.COM");
  }, 1000);
}
