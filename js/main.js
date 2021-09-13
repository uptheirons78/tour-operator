const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction));

/*========== CHANGE BACKGROUND ON HEADER ==========*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when scrool is bigger than 100 viewport height, add the scroll-header class to the header tag
    (this.scrollY >= 100) ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);