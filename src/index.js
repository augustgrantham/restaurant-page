//imports
import "./style.css";
import loadHome from "./initial-page-load";
import loadAbout from "./about-page";
import clearPage from "./clear-page";
//template elements
let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let aboutBtn = document.getElementById("about");
//event listeners
aboutBtn.addEventListener("click", () => {
    clearPage();
    loadAbout(); 
});
homeBtn.addEventListener("click", () => {
    clearPage();
    loadHome(); 
});
console.log("I work!");

loadHome();



 
