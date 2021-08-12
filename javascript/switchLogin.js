let loginBox  = document.getElementById("login");
let registerBox  = document.getElementById("register");
let topColorButton  = document.getElementById("button");

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

let storage = window.localStorage.users;

let usersArr;

let userName_login = "";

if (storage === undefined) {
    usersArr = [];
    window.localStorage.setItem('users', JSON.stringify(usersArr));
} else {
    usersArr = JSON.parse(storage);
}

function getInfo(){

    // Create the account
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let email = document.getElementById("email").value;


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
            alert("Successfully Sign up!");
        } else {
            console.log("Account with that user name already exists");
            alert("Account with that user name already exists!");
        }

    }

}

function check(){
    
    var passWord = document.getElementById("passWord").value;
    var userName = document.getElementById("UserName").value;


    let flag = false;

    let checkUser = {
        userName: userName,
        password: passWord
    }

    if(passWord === "handsomeNoDoubt" && userName === "prettyR"){
        console.log("Logged in");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        flag = true;
    }

    else if(window.localStorage.users){
        for(let i = 0; i < usersArr.length;i++){
            if (JSON.stringify(usersArr[i]) === JSON.stringify(checkUser)){
                console.log("Logged in");
                userName_login = usersArr[i].userName;
                window.location.href = "./Logged-in-html/index1.html";

                document.getElementById("user").innerHTML = userName_login;
                
                flag = true;
            }
            else if(usersArr[i].userName === checkUser.userName && usersArr[i].password != checkUser.password){
                alert("Incorrect Password!");
                flag = true;
            }
        }
        if(flag === false){
            console.log("failed");
            alert("Only the chosen one can log in!\n But maybe try:\n usernam: prettyR\n password: handsomeNoDoubt");
        }
    }
}

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("user").innerHTML = userName_login
// });