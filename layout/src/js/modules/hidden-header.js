/**
 * The header changes its size and then disappears 
 * when the user scrolls the screen window.
 */

let header = document.getElementById('header'),
    scrollPrevious = 0;

window.addEventListener('scroll', function () {
    let scroll = window.pageYOffset,
        scrollNow = scroll;

    scrollNow > 0
        ? header.classList.add('compress') 
        : header.classList.remove('compress');

    if (scrollNow > 700) {
        if (scrollNow < scrollPrevious) {
            scrollPrevious = scrollNow;
            header.classList.remove('hide');
        }

        if (scrollNow > scrollPrevious + 300) {
            scrollPrevious = scrollNow;
            header.classList.add('hide');
        }
    }
});
