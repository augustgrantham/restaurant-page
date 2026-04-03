//load images
import catBurgerImg from "./catburger.png";
import catCofeeImg from "./coffeecat.png";
//grab prexisting div
let contentDiv = document.getElementById("content");
export default function loadMenu() {
    
    console.log("menu page script loading!");

    //menu item object constructor

    function menuItem(name, img, description, price) {
        this.name = name;
        this.img = img;
        this.description = description;
        this.price = price;
    }
    //create menu objects
    const catBurger = new menuItem("borger", catBurgerImg, "hmm cat burger", `$2`);
    const catCofee = new menuItem("cofee :)", catCofeeImg, "he had a little sip but its still like safe he doesn't have germs", `$8`);
    //create array of menu items
    const menuList = [catBurger, catCofee];
    //create elements for each menu item
    for(let item of menuList) {
        //initialize elements
        let itemDiv = document.createElement("div");
        let itemName = document.createElement("h1");
        let itemImage = document.createElement("img");
        let itemInfo = document.createElement("p");
        let itemPrice = document.createElement("p");
        //assign class
        itemDiv.classList = "itemDiv";
        //assign values
        itemName.innerText = item.name;
        itemImage.src = item.img;
        itemInfo.innerText = item.description;
        itemPrice.innerText = item.price;
        //append elements to content div
        itemDiv.append(itemName);
        itemDiv.append(itemImage); 
        itemDiv.append(itemInfo);
        itemDiv.append(itemPrice);
        contentDiv.append(itemDiv);
    }
    
    /* debugging
    console.log(catBurger.price);
    console.log(catCofee.description);
    */
    //initialize elements
}

