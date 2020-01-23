    console.log("Final Reviews")

//Given this type of code, you should be able to write the expected output in the console.
for (i= 0 ; i<10 ; i+=5){

    console.log(i);
}

function doSth(x,y){
    return x-y;
}
console.log(doSth(5,4));

//Given an array of numbers, you should know how to find the smallest, largest, the first element, the last element, the number of elements in the array
let a = [1,2,3,4,5,45,35,643,324];
let min = a[0];
let max = a[0];

//Min
function findMin() {
    for (i = 0; i <= a.length ; i++) {
        if (min > a[i]) {
            min = a[i];
        }
    }
    return min;
}

//Max
function findMax() {
    for (i = 0; i <= a.length ; i++) {
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}

console.log(findMin());    
console.log(findMax());
console.log(a[0]); //first element
console.log(a[a.length-1]); //last element
console.log(a.length); //number of elements 

//Given an array of objects, you should know how to access the properties of the object and be able to output/display as required
let temp = [{name: "John", age: 12}, {name: "Sarah", age: 14}];

let para = document.querySelectorAll('p')[1]

let stringText = ""
for (let n of temp){

    stringText += n.name + " is " + n.age + " year-old <br>";
}
para.innerHTML = para.innerHTML +  "<br>" + stringText;


let arrayName = [4,5,1,3,2]
x = 0
for (let n of arrayName){
    x = x + n;
}

console.log(x);
//puts  stringtext in front
//para.innerHTML =   "<br>" + stringText + para.innerHTML ;