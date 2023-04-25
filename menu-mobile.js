const menuButton = document.querySelector('.menu-mobile')
const headerNav = document.querySelector('.header-nav-links')

function activateMenu(){
    menuButton.classList.toggle('active')
    headerNav.classList.toggle('active')
}

menuButton.addEventListener('click', activateMenu)