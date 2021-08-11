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

function getInfo(){

    // Create the account
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let email = document.getElementById("email").value;


    if(password === confirmPassword){
        console.log("Password matched!")
    }
}

function check(){
    
    let dic = {

        userName: "test",
        password: "password"

    }

    var passWord = document.getElementById("passWord").value;
    var userName = document.getElementById("UserName").value;

    if(passWord === dic.password && userName === dic.userName){
        console.log("Logged in");
        window.location.href = "./Logged-in-html/index1.html";
    }
    else if(passWord === "handsomeNoDoubt" && userName === "prettyR"){
        console.log("Logged in");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else{
        console.log("failed");
        alert("Only the chosen one can log in!\n But maybe try:\n usernam: prettyR\n password: handsomeNoDoubt");
    }


}