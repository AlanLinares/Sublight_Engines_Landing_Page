// let takenNames = ['Bill', 'Chad', 'Clyde', 'Robert', 'Pogchamp']

// const isValid = (username) => {
//     if (username.length === 0)
//     {
//         return 'cant be empty'
//     }
//     else if (username.length < 3 || username.length > 20)
//     {
//         return 'must be between 3 and 20 characters'
//     }
//     else if (takenNames.includes(username)){
//         return 'name already taken'
//     }
//     else {
//         //add to the list
//         return 'user name created'
//     }

//}

function myFunction() {
  var x = document.getElementById("nav-container");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}//end of hamburger display function




const fname = document.getElementById("fullName1");
const email = document.getElementById("email1");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phone = document.getElementById("phone1");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const language = document.getElementById("language1");


document.getElementById("submit").addEventListener("click", function(e){
   
    if (validateName(e) && validateEmail(e) && validatePhone(e) && validateLanguage(e)){
        alert("Form uploaded successfully. Thank you")
    }
})//full form check, calling other methods per input to check

function validateName(e){
    console.log(fname.value);
    if (fname.value == ""){
        console.log("option 1");
        alert("Please provide your name");
        document.myForm.Name.focus();
        e.preventDefault();
        return false;
        
    }
    else if ((fname.value.length < 3) || (fname.value.length > 25)){
        console.log("option 2");
        alert("Name must be between 3 and 25 characters");
        document.myForm.Name.focus();
        e.preventDefault();
        return false;
    }
    else
        return true;
}

function validateEmail(e){
    console.log(email.value);
    if (email.value == ""){
        console.log("option 1");
        alert("Please provide an email. Field required");
        document.myForm.Email.focus();
        e.preventDefault();
        return false;
        
    }
    else if (!(email.value.match(mailformat))) {
        console.log("option 2");
        alert("Please enter correct email ID");
        document.myForm.Email.focus();
        e.preventDefault();
        return false;
    }
    else
        return true; 
            
}

function validatePhone(e){
    console.log(phone.value);
    if (phone.value == ""){
        console.log("option 1");
        alert("Please provide a phone number");
        document.myForm.Phone.focus();
        e.preventDefault();
        return false;
        
    }
    else if(!(phone.value.match(phoneno))){
        console.log("option 2");
        alert("Please enter a 10 digit phone number");
        document.myForm.Phone.focus();
        e.preventDefault();
        return false;
    }
    else
        return true;
}

function validateLanguage(e){
    console.log(language.value);
    if (language.value == ""){
        console.log("option 1");
        alert("Please choose a language");
        
        e.preventDefault();
        return false;
        
    }
    else 
        return true;
}




// $("#submit").click (function() {
 

//     if ($("#fullName").val() == ""){
//         alert("Super false");
//         // console.log("super false");
// }
// })

