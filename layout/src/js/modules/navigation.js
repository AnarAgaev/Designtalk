// Navigation app
window.addEventListener('DOMContentLoaded', () => {
    let nav = document.getElementById('headerNav'),
        navLinks = document.getElementsByClassName('header__nav__link');

    nav.addEventListener('mouseover', () => {
        [].forEach.call(navLinks, function (link) {
            link.classList.add('dim');
        });

        event.target.classList.remove('dim')
    });

    nav.addEventListener('mouseout', () => {
        [].forEach.call(navLinks, function (link) {
            link.classList.remove('dim');
        });
    });
});