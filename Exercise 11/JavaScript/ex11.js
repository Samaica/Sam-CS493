//Show text
btn1 = document.getElementsByClassName("btn")[0];

btn1.onclick = function(){
    document.getElementById("leadtext").innerText = "I love coding!!!! :)"
}

//Add Menu
btn2 = document.getElementsByClassName("btn")[1];

btn2.onclick = function(){
    let newMenu = document.createElement("li");
    newMenu.innerHTML = '<a class="nav-link"  href="#">Menu</a>';
    let parentNode = document.getElementsByClassName("nav")[0];
    parentNode.appendChild(newMenu);
}

// btnAddMenu = document.getElementsByClassName("btn")[1];
// btnAddMenu.add

//Remove Menu
btn3 = document.getElementsByClassName("btn")[2];

btn3.onclick = function(){
    let parentNode = document.getElementsByClassName("nav")[0];
    parentNode.lastChild;
    parentNode.removeChild(parentNode.lastChild);
}



btn5 = document.getElementsByClassName("btn")[4];

btn5.onclick = function() {
    alertThing = document.getElementById("alertbox");
    alertThing.innerHTML = "<div class='alert alert-success'>Winner, winner! Chicken Dinner!</div>";
}