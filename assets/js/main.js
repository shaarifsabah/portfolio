const typingEl = document.getElementById("typing");
const texts = [
    "Your Idea, My Code",
    "Build Digital Solutions",
    "Code, Test, Deploy & Repeat.",
    "Helping Businesses Grow Online",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // ms per character

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingEl.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // pause before deleting
        return;
        }
    } else {
        typingEl.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // next text
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : typingSpeed);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    form.reset();
}

// Resume download handler
function downloadResume() {
    alert('Resume download would start here. Please contact me directly for my latest resume.');
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
            }
        });
    });

    skillBars.forEach(bar => observer.observe(bar));
}

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('text-blue-600','font-bold','border-b-2','border-blue-600'));
        link.classList.add('text-blue-600','font-bold','border-b-2','border-blue-600');
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-white/85');
        nav.classList.remove('bg-white/80');
    } else {
        nav.classList.add('bg-white/80');
        nav.classList.remove('bg-white/85');
    }
});

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    typeEffect();
});
