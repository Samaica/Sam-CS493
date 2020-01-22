let empList =[
    {
        "Course Name": "MATH 102",
        "Instructor": "Edwin Hughes",
        "Credit": "4",
        "Description":"intermediate Algebra"
    },
    {
        "Course Name":"MATH 104",
        "Instructor":"Virginia Thompson",
        "Credit": "4",
        "Description":"College Algebra "
    },
    {
        "Course Name":"MATH 104",
        "Instructor":"Saumitra Chowdry",
        "Credit": "4",
        "Description":"College Algebra "
    },
    {
        "Course Name":"MATH 111",
        "Instructor":"Nathaniel Riesenberg",
        "Credit": "4",
        "Description":"Introduction to Statistics and Probability "
    },
    {
        "Course Name":"MATH 115",
        "Instructor": "Lyndon Haynes",
        "Credit": "4",
        "Description":"Quantitative Mehtods for Decision Making"
    },
    {
        "Course Name":"MATH 120",
        "Instructor": "Virginia Thompson",
        "Credit": "4",
        "Description":"Pre-Calculus "
    },
    {
        "Course Name": "MATH 120",
        "Instructor": "Aneta Bega",
        "Credit": "4",
        "Description":"Pre-Calculus "
    },
    {
        "Course Name": "MATH 121",
        "Instructor": "Nathaniel Risenberg",
        "Credit": "4",
        "Description":"Analytic Geometry and Calculus I "
    },
    {
        "Course Name": "Math 122",
        "Instructor": "Alex Cullen",
        "Credit": "4",
        "Description":"Analytic Geometry and Calculus I"
    },
    {
        "Course Name": "MATH 230",
        "Instructor": "F.Mawyer",
        "Credit": "4",
        "Description":" Theory Numbers"
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