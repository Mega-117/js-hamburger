let menuIco = document.querySelector('.header-right > a')
let menu = document.querySelector('.hamburger-menu')

menuIco.addEventListener('click',
    function () {
        menu.classList.toggle("active")
    }
)

let closeMenu = document.querySelector('.close');

closeMenu.addEventListener('click',
    function () {
        menu.classList.toggle("active")
    }
)

/* let menu = document.querySelector('div.hamburger-menu');
let menuIco = document.querySelector('div.header-right>a');
menuIco.addEventListener('click',
    function () {
        menu.style.display = "block";
    }
)
let closeMenu = document.querySelector('div.hamburger-menu a.close');

closeMenu.addEventListener('click',
    function () {
        menu.style.display = "none";
    }
)

 */