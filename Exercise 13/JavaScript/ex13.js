document.addEventListener("DOMContentLoaded" , init );

function init(){

// name1 = document.getElementById("txtName");
// name1.innerText = "Sam";

// age1 = document.getElementById("txtAge");
// age1.innerText = "20";

// id1 = document.getElementById("txtID");
// id1.innerText = "23268877";

// address1 = document.getElementById("txtAddress");
// address1.innerText = "123 45th Street, Jamaica, NY, 11433";

// courses1 = document.getElementById("txtCourses");
// courses1.innerText = "CS 172\n CS 291\n CS 341\n CS 397";


let student = {
    name : "Sam",
    age : 20,
    id : 23267788,
    address : {
        houseNum : 123,
        street : "Main St.",
        city : "Brooklyn",
        zip : 12345,
        state : "NY"
    },
    courses : ["CS 172", " CS 291", " CS 341", " CS 397"],
    
    getAddress : function() {
        return this.address.number + " " + this.address.street
        + " " + this.address.city + " " + this.address.zip + " "
        + this.address.state
    }
}

console.log(student.getAddress());



name1 = document.getElementById("txtName");
age1 = document.getElementById("txtAge");
id1 = document.getElementById("txtID");
address1 = document.getElementById("txtAddress");
courses1 = document.getElementById("txtCourses");

name1.innerText = student.name;
age1.innerText = student.age;
id1.innerText = student.id;
address1.innerText = student.address;
courses1.innerText = student.courses;

let address = {
    houseNum : 123,
    street : "Main St.",
    city : "Brooklyn",
    zip : 12345,
    state : "NY",
}





let empList =[
    {
        "fname": "Sharad",
        "lname": "Volz"
    },
    {
        "fname": "Constance",
        "lname": "Dech"
    },
    {
        "fname": "Myra",
        "lname": "Comeau"
    },
    {
        "fname": "Noriess",
        "lname": "Dabbs"
    },
    {
        "fname": "Esperanza",
        "lname": "Shrestha"
    },
    {
        "fname": "Eugene",
        "lname": "Barron"
    },
    {
        "fname": "Petr",
        "lname": "Ravenelle"
    },
    {
        "fname": "Cristina",
        "lname": "Terry"
    },
    {
        "fname": "Victoria",
        "lname": "Aresti"
    },
    {
        "fname": "Byron",
        "lname": "Yarber"
    }
];

// for ( i = 0; i < empList.length; i++) {
//     console.log(empList[i]);
// }


//ranged for-loop in C++
for (let n of empList){
    console.log(n.fname + " " + n.lname);
}

empBody = document.getElementById("empData");

for (let n of empList) {
    let newRow = document.createElement("tr");
    let newFirstName = document.createElement("td");
    let newLastName = document.createElement("td");

    newFirstName.innerText = n.fname;
    newLastName.innerText = n.lname;
    newRow.appendChild(newFirstName);
    newRow.appendChild(newLastName);
    empBody.appendChild(newRow);
    
}

}














// firstNames2 = ["Sam", "Kevin", "Nahid", "Bryan", "Jordan", "Theodore"];
// lastNames2 = ["Jackson", "Hart", "Brown", "Gonzales", "Jones", "Roosevelt"];

// //Object Creation
// let animal = new Object();
// animal.legs = 4;
// animal.color = "brown";
// animal.eyeColor = "blue";
// animal.wings = false;

// console.log("My animal's color is " + animal.color);
// console.log(animal);

// animal.wings = true;

// // Object Literal
// let dog = {
//     name : "Cookie",
//     breed : "Pomeranian",
//     color : "Brown",
//     age: 8,
//     "previous owners": ["Joan", "John", "Jay"],
//     likes: ["Food", "Toy", "Go Out"]
// }

// console.log("My dog's name is :" + dog.name + " and he likes " + dog.likes);