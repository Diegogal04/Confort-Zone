const menuBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function showMenu() {
    navList.classList.toggle('show');
    console.log('navbar is clicked')
};


menuBtn.addEventListener('click', showMenu)

