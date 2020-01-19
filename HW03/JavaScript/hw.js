let addRow = document.getElementById("btn-add");

addRow.addEventListener("click", addToTable);

function addToTable() {
    let newRow = document.getElementById("table-body");
    let newTableIndex = document.createElement("td");
    let newFirstName = document.createElement("td");
    let newLastName = document.createElement("td");
    let insertedFirstName = document.getElementById("name").value;
    let insertedLastName = document.getElementById("last-name").value;


    newTableIndex.innerText = 1;
    newFirstName.innerText = insertedFirstName;
    newLastName.innerText = insertedLastName;
}

alert("sadsdas");