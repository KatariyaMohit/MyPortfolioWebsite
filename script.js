 const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const hero = document.getElementById('hero');
const heroText = document.querySelector('#hero');
const typewriterText = document.getElementById('typewriter');
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const text = typewriterText.getAttribute('data-text');
let index = 0;

const scrollEffect = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        section.classList.toggle('active', rect.top < window.innerHeight * 0.6);
    });
    document.body.style.backgroundPositionY = `${window.scrollY * -0.1}px`;
  

    const heroBottom = hero.getBoundingClientRect().bottom;
    header.classList.toggle('sticky', heroBottom <= 0);
};

const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop - header.offsetHeight,
        behavior: 'smooth'
    });
};

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

const animateTitles = () => {
    document.querySelectorAll('h1, h2').forEach((title, index) => {
        title.style.animationDelay = `${index * 0.2}s`;
        title.classList.add('wave');
    });
};

window.addEventListener('scroll', scrollEffect);
window.addEventListener('load', () => {
    scrollEffect();
    animateTitles();
    type();
});

document.querySelectorAll('nav a').forEach(anchor => anchor.addEventListener('click', smoothScroll));
menuToggle.addEventListener('click', () => navbar.classList.toggle('active'));
