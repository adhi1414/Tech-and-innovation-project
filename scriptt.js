// ============================================
// TECHNOVA FUTURISTIC WEBSITE JAVASCRIPT
// ============================================



// ============================================
// MOBILE NAVBAR TOGGLE
// ============================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {

    menuToggle.addEventListener('click', () => {

        navLinks.classList.toggle('active');

    });

}



// ============================================
// COUNTER ANIMATION
// ============================================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});



// ============================================
// CODING SPACE FUNCTION
// ============================================

function runCode() {

    let htmlCode = document.getElementById('htmlCode').value;

    let cssCode = document.getElementById('cssCode').value;

    let jsCode = document.getElementById('jsCode').value;

    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML =
        htmlCode + "<style>" + cssCode + "</style>";

    output.contentWindow.eval(jsCode);

}



// ============================================
// PARTICLES BACKGROUND
// ============================================

if (document.getElementById('particles-js')) {

    particlesJS('particles-js', {

        particles: {

            number: {
                value: 100
            },

            color: {
                value: '#00f5ff'
            },

            shape: {
                type: 'circle'
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: '#00f5ff',
                opacity: 0.4,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out'
            }

        },

        interactivity: {

            detect_on: 'canvas',

            events: {

                onhover: {
                    enable: true,
                    mode: 'repulse'
                },

                onclick: {
                    enable: true,
                    mode: 'push'
                }

            }

        }

    });

}



// ============================================
// GSAP HERO ANIMATIONS
// ============================================

if (typeof gsap !== 'undefined') {

    gsap.from('.hero-text', {

        opacity: 0,
        y: 50,
        duration: 1.5

    });

    gsap.from('.floating-card', {

        opacity: 0,
        x: 100,
        duration: 1.5,
        stagger: 0.3

    });

    gsap.from('.navbar', {

        y: -100,
        duration: 1,
        opacity: 0

    });

}



// ============================================
// SCROLL REVEAL EFFECT
// ============================================

const revealElements = document.querySelectorAll('.glass-card');

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {

    const triggerBottom = window.innerHeight / 1.2;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add('show');

        }

    });

}



// ============================================
// CONTACT FORM VALIDATION
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', function (e) {

        e.preventDefault();

        alert('Message Sent Successfully!');

    });

}



// ============================================
// TYPING EFFECT
// ============================================

const typingText = [

    'Artificial Intelligence',
    'Cybersecurity',
    'Web Development',
    'Cloud Computing',
    'Robotics'

];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector('.typing-text');

function typeEffect() {

    if (!typingElement) return;

    if (charIndex < typingText[textIndex].length) {

        typingElement.textContent +=
            typingText[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.textContent =
            typingText[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if (textIndex >= typingText.length) {

            textIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();



// ============================================
// 3D TILT EFFECT
// ============================================

const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let rotateX = ((y / rect.height) - 0.5) * 20;

        let rotateY = ((x / rect.width) - 0.5) * -20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'perspective(1000px) rotateX(0deg) rotateY(0deg)';

    });

});



// ============================================
// SMOOTH SCROLL EFFECT
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({

                behavior: 'smooth'

            });

    });

});


window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    if (loader) {

        loader.style.opacity = '0';

        setTimeout(() => {

            loader.style.display = 'none';

        }, 1000);

    }

});



const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {

    themeToggle.addEventListener('click', () => {

        document.body.classList.toggle('light-mode');

    });

}





const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute('id');

        }

    });

    navItems.forEach(link => {

        link.classList.remove('active-link');

        if (link.getAttribute('href').includes(current)) {

            link.classList.add('active-link');

        }

    });

});





const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {

    gsap.to(card, {

        y: 20,
        duration: 2 + index,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"

    });

});




const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('mousemove', (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.setProperty('--x', x + 'px');
        button.style.setProperty('--y', y + 'px');

    });

});





function searchTech() {

    let input =
        document.getElementById('techSearch').value.toLowerCase();

    let cards =
        document.querySelectorAll('.glass-card');

    cards.forEach(card => {

        let text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = 'block';

        } else {

            card.style.display = 'none';

        }

    });

}




document.body.classList.add('fade-in');




const cursor = document.querySelector('.custom-cursor');

if (cursor) {

    document.addEventListener('mousemove', e => {

        cursor.style.left = e.clientX + 'px';

        cursor.style.top = e.clientY + 'px';

    });

}



// ============================================
// SCROLL PROGRESS BAR
// ============================================

window.onscroll = function () {

    let winScroll =
        document.body.scrollTop ||
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    const progressBar =
        document.getElementById('progressBar');

    if (progressBar) {

        progressBar.style.width = scrolled + "%";

    }

};


