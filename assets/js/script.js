var hamburger = document.getElementById("hamburger");
var navUL = document.getElementById("nav-links");
var projects_image = document.getElementById("projects_image");

var slide_image = 1;

function hamburger_menu(){
    if(navUL.style.display == "none"){
        navUL.style.display = "block";
        hamburger.src = "../assets/imgs/mobile-portrait/cross.png";
    }else{
        navUL.style.display = "none";
        hamburger.src = "../assets/imgs/mobile-portrait/hamburger.png";
    }
}
function changeImage(){
    if (projects_image.src = "./assets/imgs/projects/1.png"){
        projects_image.src = "./assets/imgs/projects/2.png";
    } else {
        projects_image.src = "./assets/imgs/projects/1.png";
    }
}