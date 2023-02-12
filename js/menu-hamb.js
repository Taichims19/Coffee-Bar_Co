document.querySelector(".bars__menu").addEventListener("click", animateBars);

document.getElementById('btn-menu-responsive').addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav-hambur");
background_menu = document.getElementById("back_menu");

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    
}
function mostrar_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}
function ocultar_menu(){
    nav.style.right = "-950px";
    background_menu.style.display = "none";
}

