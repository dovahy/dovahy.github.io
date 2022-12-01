var icon = document.getElementById('mode-icon');

icon.onclick = function(){
    document.body.classList.toggle('dark-theme')
}

function changeColor() {
    var scrollValue = window.scrollY;
    var header = document.getElementById('topnav-right');
    if (scrollValue < 870)
    {
        header.classList.remove('changedColor');
    } else
    {
        header.classList.add('changedColor');
    }
}

window.addEventListener('scroll', changeColor);

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.about-main-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.content-image', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.content-text', { delay: 700, origin: 'right' });