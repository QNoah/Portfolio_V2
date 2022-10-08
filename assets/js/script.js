var hamburger = document.getElementById("hamburger");
var navUL = document.getElementById("nav-links");

function hamburger_menu(){
    if(navUL.style.display == "none"){
        navUL.style.display = "block";
        hamburger.src = "../assets/imgs/mobile-portrait/cross.png";
    }else{
        navUL.style.display = "none";
        hamburger.src = "../assets/imgs/mobile-portrait/hamburger.png";
    }
}