let addRow = document.getElementById("btn-add");
let tableBody = document.getElementById("table-body");

addRow.addEventListener("click", addToTable);

let index = 1;

function addToTable() {
    //creates new cells for new rows
    let newRow = document.createElement("tr");
    let newTableIndex = document.createElement("td");
    let newFirstName = document.createElement("td");
    let newLastName = document.createElement("td");
   
    //gets typed input from  text boxes
    let insertedFirstName = document.getElementById("name").value;
    let insertedLastName = document.getElementById("last-name").value;
    

    //alertmsg part:  rest is down below
    let alertBox = document.getElementById("alertmsg");

    strAlert = validateFirstname(insertedFirstName);
    strAlert += validateLastname(insertedLastName);

    
    //typed input from boxes are placed into cells
    newTableIndex.innerText = index++;
    newFirstName.innerText = insertedFirstName;
    newLastName.innerText = insertedLastName;

    //cells and rows are added
    newRow.appendChild(newTableIndex);
    newRow.appendChild(newFirstName);
    newRow.appendChild(newLastName);

    tableBody.appendChild(newRow);

    //clears the typed input from the text boxes
    document.getElementById("name").value = "";
    document.getElementById("last-name").value = "";
   
    let varForFirst = document.getElementById("name");
    let varForLast = document.getElementById("last-name");
    
    
    //alertBox continued
    varForFirst.addEventListener("focus", nameFocus, true);
    varForLast.addEventListener("focus", nameFocus, true);

    function nameFocus() {
        alertBox.style.display = "none";
    }

   
    if (strAlert == "") {
        alertBox.setAttribute("style" ,"display:none");

    } else {
        alertBox.setAttribute("style" ,"display:block");
        alertBox.setAttribute("class", "alert alert-danger")
        alertBox.innerText = strAlert;           
    }
    
    function validateFirstname(first){
        if (first.trim()== "") return "No Firstname was entered.\n";
        else if (/[^a-zA-Z]/.test(first)) return "Only a-z, A-Z in Firstname allowed!\n";
        return "";
    }

    function validateLastname(last){
        if (last.trim()== "") return "No Lastname was entered.\n";
        else if (/[^a-zA-Z]/.test(last)) return "Only a-z, A-Z in Lastname allowed!\n"; //[^a-zA-Z] means do not match a-zA-Z
        return "";
    }


}



//Clear button
let delRow = document.getElementById("btn-clear");

delRow.addEventListener("click", clearTable);

//while loop got help from https://www.w3schools.com/jsref/met_node_removechild.asp
function clearTable() { 
    while (tableBody.hasChildNodes()){
        tableBody.removeChild(tableBody.firstChild);
    }
}



//Task 2
let txtInput = document.getElementById("txtInput");

txtInput.addEventListener("keyup", transformText);

function transformText() {
    let upperCase = document.getElementById("txtUC");
    let lowerCase = document.getElementById("txtLC");
    let redText = document.getElementById("txtRed");
    let cursiveText = document.getElementById("txtCursive");

    upperCase.innerText = txtInput.value.toUpperCase();
    lowerCase.innerText = txtInput.value.toLowerCase();

    redText.setAttribute("style", "color: red");
    redText.innerText= txtInput.value;

    cursiveText.setAttribute("style","font-family: cursive");
    cursiveText.innerText = txtInput.value;

}

//alert("sadsdas");