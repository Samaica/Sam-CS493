let empList =[
    {
        "Course Name": "CHEM 106",
        "Instructor": "Jennifer Appaw",
        "Credit": "4",
        "Description":"Essentials of College Chemistry"
    },
    {
        "Course Name":"CHEM 107",
        "Instructor":"Hua Deng ",
        "Credit": "4",
        "Description":"Essentials of College Chemistry Laboratory "
    },
    {
        "Course Name":"CHEM 108",
        "Instructor":"Jennifer Appawu",
        "Credit": "4",
        "Description":"Principles of Chemistry I  "
    },
    {
        "Course Name":"CHEM 108",
        "Instructor": "Catherine Foster",
        "Credit": "4",
        "Description":"Principles of Chemistry I"
    },
    {
        "Course Name":"CHEM 109",
        "Instructor": "Angela Herbert ",
        "Credit": "4",
        "Description":" Principles of Chemistry I Laboratory  "
    },
    {
        "Course Name":"CHEM 109",
        "Instructor": "Zhu Zhou ",
        "Credit": "4",
        "Description":" Principles of Chemistry I Laboratory  "
    },
   
    {
        "Course Name": "CHEM 111",
        "Instructor": "Elmer-Rico Mojica",
        "Credit": "4",
        "Description":"Principles of Chemistry II  "
    },
    
    {
        "Course Name": "CHEM 233",
        "Instructor": "Jong-ill Lee",
        "Credit": "4",
        "Description":"Organic Chemistry II "
    }
   
  ];
  
  //
  
  for (let n of empList){
  //console.log(n['Course Name']+""+n.Instructor+""+n.Credit+""+n.Description);
  let row = document.createElement("tr");
    checkBox = document.createElement("input");
    checkBox.addEventListener("click", taskCompleted);
    // let colchkbox = document.createElement("td");
  let colCourseName = document.createElement("td");
  let colInstructor= document.createElement("td");
    let colCredit= document.createElement("td");
    let colDescription= document.createElement("td");
  colCourseName.innerText = n['Course Name'] + " ";
  colInstructor.innerText= n.Instructor + " ";
    colCredit.innerText=n.Credit + " ";
    colDescription.innerText=n.Description + " " ;
    checkBox.type ="checkbox";
  
    row.appendChild(checkBox);
  row.appendChild(colCourseName);
    row.appendChild(colDescription);
  row.appendChild(colInstructor);
    row.appendChild(colCredit);
    
  document.getElementById("data").appendChild(row);
  }
  function taskCompleted(){
        let checkbox= event.target;
        console.log(this);
        var label = this.parentNode;
  
  
        if (checkbox.checked) 
            label.setAttribute("style", "font-weight: bold;");
            
        else
            label.setAttribute("style", "font-weight: none");
        
  
    }