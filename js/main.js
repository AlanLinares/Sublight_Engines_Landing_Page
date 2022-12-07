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

// }
function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}