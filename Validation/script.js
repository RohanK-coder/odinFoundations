const mail = document.getElementById("email");

mail.addEventListener("input",() =>{
    
    if(mail.validity.typeMismatch){
        mail.setCustomValidity("Expecting mail buddy !!");
    }
})