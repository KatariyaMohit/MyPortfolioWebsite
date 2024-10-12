const sections = document.querySelectorAll('section');
const scrollEffect = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
};

const header = document.querySelector('header');
const hero = document.getElementById('hero');
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

const toggleMenuVisibility = () => {
    const navLinksVisible = navbar.classList.contains('active');
    menuToggle.style.display = navLinksVisible ? 'none' : 'block';
};

window.addEventListener('scroll', scrollEffect);
scrollEffect();

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });
    });
});

const heroText = document.querySelector('#hero');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroText.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});

window.addEventListener('load', () => {
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach((title, index) => {
        title.style.animationDelay = `${index * 0.2}s`;
        title.classList.add('wave');
    });
});

const typewriterText = document.getElementById('typewriter');
const text = typewriterText.getAttribute('data-text');
let index = 0;

const type = () => {
    if (index < text.length) {
        typewriterText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 75);
    } else {
        setTimeout(() => {
            typewriterText.innerHTML = '';
            index = 0;
            type();
        }, 600);
    }
};

window.addEventListener('load', type);

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleMenuVisibility();
});

window.addEventListener('scroll', () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});
toggleMenuVisibility();
