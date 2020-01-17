 document.addEventListener("DOMContentLoaded", init);

//alert("dfsdf");
function init() {
    console.log(document.getElementById("top"));
    let btnSubmit = document.querySelector("button.btn");
    btnSubmit.addEventListener("click", validateForm);
    

    function validateForm() {
        console.log("validate Form is fired!");
        let strAlert = "";
        
        strAlert = validateFirstName(document.forms[0].firstname.value);
        strAlert = strAlert + validateLastName(document.forms[0].lastname.value);
        strAlert = strAlert + Username(document.forms[0].username.value);

        function validateFirstName(field) {
            if (field.length == 0)
                return "No first name was entered.";
            
            else if ([/a-z/]);
                return "Only .... can be entered.";

            else 
                return "";
        }

        function validateLastName(field) {
            if (field.length == 0)
                return "No last name was entered.";
            
            else
                return "";
        }

        function validateUsername(field) {
            if (field.length == 0)
                return "No Username was entered.";

            else if (!(/yorkmail\.cuny\.edu/.test(field)))
                return "yorkmail.cuny.edu usernames only";

            return "";
        }











        document.getElementById("alertbox").innerText = "ALERT!!!!!!";
        document.getElementById("alertbox").style.display = "block";
        event.preventDefault(); //will prevent the form from submitting

    }

}