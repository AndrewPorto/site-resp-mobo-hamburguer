const menu = document.querySelector('.menu');
const newflix = document.querySelector('body')
const btnAnimation = document.querySelector('.btn-hamburger')

function activeMenu() {
    menu.classList.toggle("active")
    newflix.classList.toggle("opct")
    btnAnimation.classList.toggle("btn-animation")
}
