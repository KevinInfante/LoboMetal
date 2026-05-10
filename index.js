// ============================================================================
// CAROUSEL FUNCTIONALITY
// ============================================================================
class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-container');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');
        this.currentIndex = 0;
        this.autoAdvanceInterval = null;
        this.autoAdvanceDelay = 2500; 

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        // Show first slide
        this.showSlide(0);

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Start auto-advance
        this.startAutoAdvance();

        // Pause auto-advance on hover
        this.container.parentElement.addEventListener('mouseenter', () => this.pauseAutoAdvance());
        this.container.parentElement.addEventListener('mouseleave', () => this.startAutoAdvance());
    }

    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to current slide
        this.slides[index].classList.add('active');
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
        this.resetAutoAdvance();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
        this.resetAutoAdvance();
    }

    startAutoAdvance() {
        if (this.autoAdvanceInterval) return;
        this.autoAdvanceInterval = setInterval(() => this.nextSlide(), this.autoAdvanceDelay);
    }

    pauseAutoAdvance() {
        if (this.autoAdvanceInterval) {
            clearInterval(this.autoAdvanceInterval);
            this.autoAdvanceInterval = null;
        }
    }

    resetAutoAdvance() {
        this.pauseAutoAdvance();
        this.startAutoAdvance();
    }
}

// Initialize carousel when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Carousel());
} else {
    new Carousel();
}

// ============================================================================
// NAVIGATION
// ============================================================================
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
