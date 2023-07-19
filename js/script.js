let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        }
    });

//sticky navbar
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


//Remove toggle icon and navbar when click
menuIcon.classList.remove('bi-x');
navbar.classList.remove('active');
};


//Toggle icon nav
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
console.log(navbar);

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
});



//Scroll Reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//typed JS
const typed = new Typed('.multiple-text', {
    strings: ['FrontEnd Developer', 'Drupal Developer', 'Wordpress Dev', 'Angular Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

