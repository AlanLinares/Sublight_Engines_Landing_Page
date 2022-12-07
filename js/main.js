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




const fname = document.getElementById("fullName");
// const submit = document.getElementById("submit1");

document.getElementById("submit").addEventListener("click", function(e){
    console.log(fullName.value);
    if (fname.value == null){
        console.log("option 1");
        alert("Please provide your name");
        e.preventDefault();
        return false;
        
    }
    else if ((fname.value.length < 3) || (fname.value.length > 25)){
        console.log("option 2");
        alert("Name must be between 3 and 25 characters");
        e.preventDefault();
        return false;
    }

})

// $("#submit").click (function() {
 

//     if ($("#fullName").val() == ""){
//         alert("Super false");
//         // console.log("super false");
// }
// })




var email = document.getElementById("email");
// var atpos = email.indexOf("@");
// var dotpos = email.indexOf(".");
var phone = document.getElementById("phone");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var language = document.getElementById("language");

// fname.addEventListener('change', validateForm());
email.addEventListener('change', validateForm);
phone.addEventListener('change', validateForm);
language.addEventListener('change', validateForm);

// document.addEventListener('submit', function(e){
    function validateForm(){
        
        

       
        // if(email ==""){
        //     alert("Please provide your email");
        //     document.myForm.email.focus();
        //     return false;
        // }
        // if (atpos < 1 || ( dotpos - atpos < 2 )) {
        //     alert("Please enter correct email ID")
        //     document.myForm.EMail.focus() ;
        //     return false;
        // }
        
        // if(!(phone.value.match(phoneno))){
            
        //     alert("Please enter a 10 digit phone number please");
        //     document.myForm.phone.focus();
        //     return false;
        //     }
        // if(language == "---Select---"){
        //     alert("Please select a language");
        //     document.myForm.language.focus();
        //     return false;
        // }
        
        // alert("form submitted");
        return true;
    }//end of validateForm()   
// })//end of event listener