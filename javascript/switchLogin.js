// Assign values to top buttons and its color
let loginBox  = document.getElementById("login");
let registerBox  = document.getElementById("register");
let topColorButton  = document.getElementById("button");

// Create the register and login functions to relocate their location whenever the user click the button.
function register(){
    loginBox.style.left="-380px"
    registerBox.style.left="-0px"
    topColorButton.style.left = "120px"
}
function login(){
    loginBox.style.left="0px"
    registerBox.style.left="380px"
    topColorButton.style.left = "0px"
} 


//  Initialzie the local storage.
let storage = window.localStorage.users;

// Declare the user inputs{user name, password, etc.} into an array.
let usersArr;

// If the storage is undefined(none) then assign the userArr as empty array(list)
// also set the item for the dictionary
if (storage === undefined) {
    usersArr = [];
    window.localStorage.setItem('users', JSON.stringify(usersArr));
    window.localStorage.setItem('loggedinUser', "");
} else {
    usersArr = JSON.parse(storage);
}

// Create getInfo function to retrieve the information from the user whenever they click the register button
function getInfo(){

    // Create the account
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let email = document.getElementById("email").value;
    
    // Regular expression to check the user input
    let checkUserName = /[a-zA-Z\d]{4,12}/g;
    let checkEmail = /[a-z0-9\.\_\%\+\-]+@[a-z0-9\.\-]+\.[a-z]{2,4}/g;
    let passWordCheck = /[a-zA-Z\d]{4,12}/g;


    // Give the user alert the input is not qualified
    if(!(userName).match(checkUserName) || !(email).match(checkEmail) || !(password).match(passWordCheck)){
        alert("Invalid account!\n\nUsername - Password: must have at least 4 characters and the maximum is 12 characters\nEmail: the range after . is from 2 - 4 characters");
        console.log((userName).match(checkUserName));
        console.log((email).match(checkEmail));
        console.log((password).match(passWordCheck));
    }


    // Otherwise start checking and adding to the local storage.
    else if(JSON.stringify(userName).match(checkUserName) && JSON.stringify(email).match(checkEmail) && JSON.stringify(password).match(passWordCheck)){
        if(password === confirmPassword){
            console.log("Password matched!");
            let newUser = {
                userName: userName,
                password: confirmPassword
            }
    
            let checkArr = JSON.stringify(usersArr);
            
            if(!checkArr.includes(userName)) {
                usersArr.push(newUser);
                window.localStorage.setItem('users', JSON.stringify(usersArr));
    
                console.log("Created the account!");
                alert("Successfully Signed up!");
            } else {
                console.log("Account with that user name already exists");
                alert("Account with that user name already exists!");
            }
        }
        else if(password != confirmPassword){
            alert("Password do not match!");
        }
    }

}


// Create check() function to to check if the user input is valid when they click the login button
// If it's valid then show them the new home page with their usename
// Otherwise give an alert.
function check(){
    
    var passWord = document.getElementById("passWord").value;
    var userName = document.getElementById("UserName").value;
    let flag = false;

    let checkUser = {
        userName: userName,
        password: passWord
    }

    // Check if the input is from the given account
    if(passWord === "handsomeNoDoubt" && userName === "prettyR"){
        console.log("Logged in");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        flag = true;
    }

    // Otherwise check if the user account exists in the local storage
    else if(window.localStorage.users){

        // Loop through the array
        for(let i = 0; i < usersArr.length;i++){

            // If found, go to the main page
            if (JSON.stringify(usersArr[i]) === JSON.stringify(checkUser)){

                console.log("Logged in");
                window.localStorage.setItem("loggedinUser", usersArr[i].userName);
                window.location.href = "./Logged-in-html/index1.html";
                flag = true;

            }

            // If found but wrong password, give the alert
            else if(usersArr[i].userName === checkUser.userName && usersArr[i].password != checkUser.password){
                alert("Incorrect Password!");
                flag = true;
            }
        }

        // If the account is not exists, give an account for user
        if(flag === false){
            console.log("failed");
            alert("Only the chosen one can log in!\n But maybe try:\n usernam: prettyR\n password: handsomeNoDoubt");
        }
    }
}

// Added event listener to change the name.
// Differentiate the login and register
document.addEventListener("DOMContentLoaded", function(){
    let params = new URLSearchParams(document.location.search.substring(1));
    let click = params.get("click");
    if(click === "register"){
        register();
    }
    document.getElementById("user").innerHTML = window.localStorage.getItem("loggedinUser");
});