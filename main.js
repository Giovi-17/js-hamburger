//Dichiarazione variabile Hamburger Menu
const hamburgerMenu = document.querySelector(".hamburger-menu");

//Dichiarazione variabile Chiusura Hamburger Menu
const buttonHamburgerMenuClose = document.querySelector(".close")

//Dichiarazione variabile Apertura Hamburger Menu
const buttonHamburgerMenuOpen = document.getElementsByTagName("bottone");

//Apertura Hamburger Menu
buttonHamburgerMenuOpen.addEventListener('click',

    function() {
        hamburgerMenu.style.display = "block";
    }

);

//Chiusura Hamburger Menu
buttonHamburgerMenuClose.addEventListener('click',

function() {
    hamburgerMenu.style.display = "none";
}

);