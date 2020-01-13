//alert("JavaScript is useful!")
/* block
    comment*/


// Same as a = 5; b = 10;
/*a = 5;
b = 10;
c = a + b;
alert(c);*/

helloworld = "Finally, it's Friday!\n";
helloworld2 = 'Finally it\'s "Friday"!'
greeting = helloworld;
//Check datatype of variables, use typeof


console.log(greeting);
console.log(helloworld2)

document.write(greeting);
document.write(helloworld2);


count = 1;
count += 1; //count = count + 1;

console.log(count)

if (count > 0)
    console.log("It is greater than 0\n");

    // document.getElementById("leadtext").style.color="blue";

let age = 20;

if (age > 18)
    console.log("Old Enough");

else 
    console.log("Too Young!");

let temp = 34;

if (temp < 32)
    document.write("Freezing waeather");

else if (temp < 41 && temp >= 32)
    document.write("Very Cold weather");

else if (temp < 51 && temp >= 41)
    document.write("Cold weather");

else if (temp < 61 && temp >= 51)
    document.write("It\'s nice today!");

else if (temp >= 61)
    document.write("It\'s warm today!");
    