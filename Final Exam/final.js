let pgTitleBtn = document.getElementById("btnPageTitle");

pgTitleBtn.addEventListener("click", ganbatte);

function ganbatte() {
    let box1 = document.getElementById("paraOne");

    box1.innerText = document.title;
}

let box2 = document.getElementById("paraTwo");
box2.innerText = 100;

let decBtn = document.getElementById("btnCount");

decBtn.addEventListener("click", decBy10);

function decBy10() {
    box2.innerText = box2.innerText - 10;
}


let q16 = document.getElementById("display");
t1Array = [{name: "Home", color: "primary"},{name: "Search", color: "secondary"},{name: "Add", color: "success"},{name: "Remove", color: "info"}];

let stringText = "";
for (let n of t1Array) {
    stringText = stringText + n.name + ":" + n.color + '<br>';
}

q16.innerHTML = q16.innerHTML + stringText;

//check1
let check1 = document.getElementById("radio-blue");

check1.addEventListener("click", toggleBlue);

function toggleBlue() {
    let box3 = document.getElementById("paraLast");
    box3.setAttribute("style", "color:blue");
} 

//check 2
let check2 = document.getElementById("radio-linethrough");

check2.addEventListener("click", crossOut);

function crossOut() {
    let box3 = document.getElementById("paraLast");
    box3.setAttribute("style", "text-decoration:line-through");
} 

//check 3
let check3 = document.getElementById("radio-bold");

check3.addEventListener("click", boldOut);

function boldOut() {
    let box3 = document.getElementById("paraLast");
    box3.innerHTML = "<b>JavaScript is Useful!!!</b>";
    
} 
