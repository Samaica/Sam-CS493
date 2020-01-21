// let request = new XMLHttpRequest();
// let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"

// request.open("GET", requestURL);
// request.responseType = 'json';
// request.addEventListener("load", reqListener);
// request.send();

//let studentData = document.getElementById("studentData");
// function reqListener() {
//     console.log(request.response);
//     studentList = request.response;

//     console.log(studentList[0].fname);

//     let stringStudent = "";
//     for (let n of studentList) {
//         stringStudent += '<tr><td>' + n.fname + '</td><td>' + n.lname + 
// '</td><td>' + n.address + '</td><td>' + n.city + 
// '</td><td>' + n.tel + '</td></tr>'
//     }
//     studentData.innerHTML = stringStudent;
// }
   
let requestURL = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"

// let request = fetch(requestURL);

// fetch(requestURL)
//  .then(function(response) {
//     console.log(response.json())})
//  .then(function(vvvv)){
//         populatList(vvvv);
//     })

fetch(requestURL)
 .then(reponse => response.json()
