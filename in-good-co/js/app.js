const burgMenu = document.getElementById('burger-menu');
const slideNav = document.getElementById('slide-nav');
const bod = document.getElementById('body');

burgMenu.addEventListener('click', ()=> {
    if (burgMenu.classList.contains('open')) {
        burgMenu.classList.remove('open');
        slideNav.classList.remove('slide');
        bod.classList.remove('slide');
    } else {
        burgMenu.classList.add('open');
        slideNav.classList.add('slide');
        bod.classList.add('slide');
    }
})