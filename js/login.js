document
.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();


let savedUser =
JSON.parse(localStorage.getItem("vertexUser"));



if(!savedUser){

alert("No account found. Please register first.");

window.location.href="register.html";

return;

}



let username =
document.getElementById("username").value;


let password =
document.getElementById("password").value;



if(
username === savedUser.username &&
password === savedUser.password
){


localStorage.setItem(
"loggedIn",
"true"
);



window.location.href="loading.html";


}

else{


alert("Incorrect username or password");


}



});