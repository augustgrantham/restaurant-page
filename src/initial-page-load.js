//element initialization 
let header = document.createElement("h1");
let peachImg = document.createElement("img");
let infoP = document.createElement("p");
//grab prexisting div
let contentDiv = document.getElementById("content");
header.textContent = "Peachy Man's Bistro";
peachImg.src = "./peach.png";
infoP.textContent = "Our favorite feline friend only cares about two things: good naps, and good food. Whether it's a freshly out of the oven, steaming loaf of bread, or his finest Creme de la crepe, Mr. P is always looking for a new way to feed your soul.";

contentDiv.append(header);
contentDiv.append(peachImg);
contentDiv.append(infoP);

