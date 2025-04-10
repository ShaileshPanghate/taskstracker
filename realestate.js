// Toggle Mobile Menu
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Section Animation on Page Load
document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }
});

// Testimonials Auto Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

// Start the auto-slider only if testimonials exist
if (testimonials.length > 0) {
    setInterval(showNextTestimonial, 4000);
}

// Fade-in Animation on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-effect').forEach(el => observer.observe(el));
