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