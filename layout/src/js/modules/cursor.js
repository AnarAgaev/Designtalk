// Cursor app
window.addEventListener('DOMContentLoaded', () => {

    // Create new cursor
    let cursor = document.createElement('div');
        cursor.classList.add('cursor');
    
    // Add new cursor to the document
    document.body.appendChild(cursor);
    
    // Get clickable images
    let clickableImages = document.querySelectorAll('a > img');
    
    // Function for moove sicky elemeng
    let stictyElementToCursor = event => {
        cursor.style.top = event.pageY + 'px';
        cursor.style.left = event.pageX + 'px';
        cursor.classList.add('show');
    };
    
    // Listening when cursor of mouse is over or out on clickable image
    for (let i = 0; i < clickableImages.length; i++) {
        clickableImages[i].addEventListener('mousemove', stictyElementToCursor);
        clickableImages[i].addEventListener('mouseout', () => {
            cursor.classList.remove('show');
        });
    }
});