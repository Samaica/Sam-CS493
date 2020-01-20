let submit = document.getElementsByClassName("btn")[0];

submit.addEventListener("click", validatePassword)

function validatePassword() {
    password = document.getElementById("exampleInputPassword1").value;
    strAlert = validatePassword(password);

    if (strAlert == "") {
        document.getElementById("alertbox").setAttribute("style" ,"display:none");

    } else {
        document.getElementById("alertbox").setAttribute("style" ,"display:block");
        document.getElementById("alertbox").innerText = strAlert;    
        // evt.preventDefault();        
    }
    

    function validatePassword(pw){
        if (pw.trim()== "") return "No password was entered!\n";
        else if (/[^a-zA-Z0-9]/.test(pw)) return "Only alphabetical letters and numbers allowed in password allowed!\n";
        return "";
    }
}