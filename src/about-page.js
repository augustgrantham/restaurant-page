//load images
import peachyMan from "./peach.png";
export default function loadAbout() {
    
    console.log("about page script loading!");
    //initialize elements
    let aboutHeader = document.createElement("h1");
    let aboutImage = document.createElement("img");
    let aboutInfo = document.createElement("p");
    //grab prexisting div
    let contentDiv = document.getElementById("content");
    //assign values to elements
    aboutImage.src = peachyMan;
    aboutHeader.innerText = "A hungry kitty";
    aboutInfo.innerText = "One day a fat orange cat was hungry, so he went to the fridge. He ate everything in the cheese drawer, he ate every little smidge. He ate everything in the freezer, but still he wanted some more. So we opened him a cafe, so that from now till the end of time. Peachy Man's got his dinner, he buys it off your dime.";
    //append elements to content div
    contentDiv.append(aboutHeader);
    contentDiv.append(aboutImage);
    contentDiv.append(aboutInfo);
    }

