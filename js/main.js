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
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
const phone = document.getElementById("phone1");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const language = document.getElementById("language1");


document.getElementById("submit").addEventListener("click", function(e){
    console.log(fname.value);
    if (fname.value == ""){
        console.log("option 1");
        alert("Please provide your name");
       
        return false;
        
    }
    else if ((fname.value.length < 3) || (fname.value.length > 25)){
        console.log("option 2");
        alert("Name must be between 3 and 25 characters");
       
        return false;
    }

})//name check

document.getElementById("submit").addEventListener("click", function(e){
    console.log(email.value);
    if (email.value == ""){
        console.log("option 1");
        alert("Please provide an email. Field required");
       
        return false;
        
    }
    else if (!(email.value.match(mailformat))) {
        console.log("option 2");
        alert("Please enter correct email ID");
        
        return false;
    }
    

})//email check

document.getElementById("submit").addEventListener("click", function(e){
    console.log(phone.value);
    if (phone.value == ""){
        console.log("option 1");
        alert("Please provide a phone number");
       
        return false;
        
    }
    else if(!(phone.value.match(phoneno))){
        console.log("option 2");
        alert("Please enter a 10 digit phone number");
        
        return false;
}
       

})//phone check

document.getElementById("submit").addEventListener("click", function(e){
    console.log(language.value);
    if (language.value == ""){
        console.log("option 1");
        alert("Please choose a language");
       
        return false;
        
    }
   
       

})//language check

// $("#submit").click (function() {
 

//     if ($("#fullName").val() == ""){
//         alert("Super false");
//         // console.log("super false");
// }
// })


// document.addEventListener('submit', function(e){
    function validateForm(){
        
        

       

        
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