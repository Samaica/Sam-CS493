console.log("sdkfjdsk");

let aVar = '5';

if (aVar == '5');
console.log(typeof(aVar)); //string

if (aVar == '5')
    console.log("aVar == '5' YES");

if (aVar == 5)
    console.log("aVar == 5 YES");

//strict equality operator, checks the type
if (aVar === 5)
    console.log("aVar === 5 YES")

if (parseInt(aVar) === 5)
    console.log("aVar === 5 YES")

// for (i = 1, j = 10; i <= j; i++)
//     console.log(i);

// // for (i = 5, count = 100; i <= count; i=i+5)
// //     console.log(i);

// max = 2048;
// for (i = 1; i = max; i = i * 2)
//     console.log(i);

let listName = ['Kevin', 'Bryan', 'Sam', 'Theodore','Nahid'];
console.log(listName[0]);

for (i = 0; i < listName.length; i++)
    console.log(listName[i]);

name="";
for (i = 0; i < listName.length; i++){
    name = name + listName[i] + " ";
}

console.log(name);
   
// listbox = document.getElementsByClassName("box");
// for (i = 0; i < listbox.length; i++)
//     console.log(listbox[i].innerHTML);


// Camel Case: 1st letter lowercase, other words uppercase
function countByFive() {
let count = 100;
for (i = 5; i <= count; i = i + 5) {
    console.log(i);
    }
}

countByFive();

function addTwo(x, y){
    return x+y;
}

console.log(addTwo(10, 20));

function changeTextColor() {
    document.getElementById("top").style.color="red";
}

// changeTextColor();

//no need for changeTextColor()'s parenthesis or else it will call function
document.getElementById("top").ondblclick = changeTextColor;

//Exercise 10
//Q1
const btn1 = document.getElementById("btnOne"); //makes a var. for a DOM
btn1.onclick = incrementCount; //Object w/ event = undefined function
count = 1;

function incrementCount(){  //function from like 77 gets defined
    document.getElementById("paraOne").innerHTML = count;
    count++;
}


//Q2
const btn2 = document.getElementById("btnTwo");

btn2.onclick = changeFontColor;
const para2 = document.getElementById("paraTwo");
let ColorName = ['red', 'orange', 'green', 'blue', 'maroon', 'yellow'];
let index = 0;

function changeFontColor(){
    para2.style.color= ColorName[index];
    index = (index + 1) % 6;    
}

//Q3
const btn3 = document.getElementById("btnThree");

btn3.onclick = changeBgColor;
const Bg = document.getElementById("divBG");
let index2 = 0;

function changeBgColor(){
    Bg.style.backgroundColor= ColorName[index2];
    index2 = (index2 + 1) % 6;
}

//Anonymous function
// btn3.onclick = function(){
//     Bg.style.backgroundColor= ColorName[index2];
//     index2 = (index2 + 1) % 6;
// }

//Q4
const btn4 = document.getElementById("btnFour");
const para4 = document.getElementById("paraFour");
btn4.onclick = function(){
    // para4.innerHTML = "Clicked!!!"
    let initNumber = document.getElementById("txtNumber").value;
    let sum = 0;
    for(i = 1; i <= initNumber; i++){
        sum = sum + i;
    }
    para4.innerHTML = sum;

}

//Q5
const btn5 = document.getElementById("btnFive");  //Times button
const para5 = document.getElementById("paraFive"); //Output slot

btn5.onclick = function(){
    let n1 = document.getElementById("numberOne").value;
    let n2 = document.getElementById("numberTwo").value;
    let product = n1 * n2;
    para5.innerText = product;
}

// btn5.onclick = Multiply;
// function Multiply(){
//     let n1 = document.getElementById("numberOne").value;
//     let n2 = document.getElementById("numberTwo").value;
//     let product = n1 * n2;
//     para5.innerText = product;
// }

// Multiply();

const btn6 = document.getElementById("btnSix");
const shopList = document.getElementById("shoppingList");


btn6.onclick = function(){
    let listItem = document.getElementById("listItem").value;
    let newItem = document.createElement("li"); 
    newItem.innerText = listItem;
    
    shopList.appendChild(newItem);

}