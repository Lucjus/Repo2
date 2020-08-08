const MobileMenuIcon = document.querySelector('.hamburger-icon')
const heroWrapper = document.querySelector('.hero-wrapper')
const mobileMenu = document.querySelector('.main-nav')
MobileMenuIcon.addEventListener('click', showMobileMenu)


function showMobileMenu() {
    mobileMenu.classList.toggle('display')
    heroWrapper.classList.toggle('hide')

}