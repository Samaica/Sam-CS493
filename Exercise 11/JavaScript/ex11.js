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

//Change Image
btn4 = document.getElementsByClassName("btn")[3];
const image1 = './Images/YorkLogo-1.png'
const image2 = './Images/YorkLogo-2.png'
btn4.onclick = function() {
    let shownImage = document.getElementsByClassName("float-right")[0].src;
    
    if (shownImage.indexOf('YorkLogo-1.png') != -1){
        document.getElementsByClassName("float-right")[0].src = './Images/YorkLogo-2.png';
    }
        
    else {
        document.getElementsByClassName("float-right")[0].src = './Images/YorkLogo-1.png';
    }
    
}
 
    



btn5 = document.getElementsByClassName("btn")[4];

btn5.onclick = function() {
    alertThing = document.getElementById("alertbox");
    alertThing.innerHTML = "<div class='alert alert-success'>Winner, winner! Chicken Dinner!</div>";
}

btn6 = document.getElementById("btn-new-task");

btn6.onclick = function() {
    let toDoTask = document.getElementById("new-task").value;
    let newTask = document.createElement("li");
    newTask.innerText = toDoTask;

    let parentList = document.getElementById("todo-tasks");
    parentList.appendChild(newTask);
}