//imports
import "./style.css";
import "./initial-page-load";
import loadAbout from "./about-page";
import clearPage from "./clear-page";
//template elements
let homeBtn = document.getElementById("home");
let menuBtn = document.getElementById("menu");
let aboutBtn = document.getElementById("about");
//event listeners
aboutBtn.addEventListener("click", () => {
    clearPage();
    
});
console.log("I work!");


 
