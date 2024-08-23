let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




let Sections = document.querySelectorAll('Section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({

    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: top });
ScrollReveal().reveal('.home-img, .Skills-container, .Portfolio-box, .Contact form', { origin: bottom });
ScrollReveal().reveal('.home-content h1, .About-img', { origin: left });

const typed = new Typed(' .multiple-text', {
    strings: ['Web Developer', 'Student', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});
