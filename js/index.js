getInfo = () =>{
    let name = document.getElementById("nameAndSurname").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let subject = document.getElementById("subject").value;
    let password = document.getElementById("password").value;
    let newsletter = document.getElementById("newsletters").checked;

    if(newsletter){
        alert(
          "Welcome " + name + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: "+ email + ", or alternatively on the phone number: "+ phoneNumber + "."
        );
    }
    else{
        alert(
          "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + "!  If you want to sign up, you better CHECK that newsletter box! "
        );
    }

}