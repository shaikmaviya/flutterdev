// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
const animateElements = document.querySelectorAll('.skill-category, .project-card, .about-content, .contact-content');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Here you would typically send the form data to a backend service
    // For now, we'll just show an alert
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon!`);
    
    // Reset form
    contactForm.reset();
});

// Typing Effect for Hero Title (Optional Enhancement)
const heroTitle = document.querySelector('.hero-title');
const text = heroTitle.innerHTML;
heroTitle.innerHTML = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < text.length) {
        heroTitle.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50);
    }
}

// Uncomment to enable typing effect
// window.addEventListener('load', typeWriter);

// Skill Level Animation on Scroll
const observeSkillLevels = () => {
    const skillLevels = document.querySelectorAll('.level-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fillLevel 2s ease-out forwards';
            }
        });
    }, { threshold: 0.5 });
    
    skillLevels.forEach(level => observer.observe(level));
};

// Initialize on load
window.addEventListener('load', observeSkillLevels);

// Counter Animation for Stats
const stats = document.querySelectorAll('.stat h4');
let hasAnimated = false;

const animateCounters = () => {
    if (hasAnimated) return;
    
    stats.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
        
        let count = 0;
        const increment = numericValue / 50;
        
        const updateCounter = () => {
            if (count < numericValue) {
                count += increment;
                if (isPercentage) {
                    stat.textContent = Math.ceil(count) + '%';
                } else if (isPlus) {
                    stat.textContent = Math.ceil(count) + '+';
                } else {
                    stat.textContent = Math.ceil(count);
                }
                setTimeout(updateCounter, 30);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
    
    hasAnimated = true;
};

// Trigger counter animation when About section is visible
const aboutSection = document.querySelector('.about');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    counterObserver.observe(aboutSection);
}

// Parallax Effect for Hero Section (Optional)
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Dark Mode Toggle (Optional Feature)
// Uncomment if you want to add dark mode functionality
/*
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});
*/

// Project Filter (Optional - if you want to add filtering)
// Can be expanded to filter projects by technology
const projectTags = document.querySelectorAll('.project-tags .tag');

projectTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const filterValue = tag.textContent.toLowerCase();
        console.log(`Filter projects by: ${filterValue}`);
        // Add filtering logic here
    });
});

// Cursor Animation (Optional Enhancement)
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add CSS for custom cursor
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid #0468D7;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none; /* Hidden by default, uncomment display: block to enable */
    }
    
    .custom-cursor.active {
        transform: scale(1.5);
    }
`;
document.head.appendChild(style);

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loaded class styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: 10000;
        animation: fadeOut 0.5s ease forwards;
        animation-delay: 0.3s;
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            visibility: hidden;
        }
    }
`;
document.head.appendChild(loadingStyle);

// Contact Section Slide-in Animation
const contactInfoSection = document.querySelector('.contact-info');
const contactFormSection = document.querySelector('.contact-form');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
});

if (contactInfoSection) contactObserver.observe(contactInfoSection);
if (contactFormSection) contactObserver.observe(contactFormSection);

console.log('Portfolio website loaded successfully!');
