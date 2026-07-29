document
.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();


let password =
document.getElementById("password").value;


let confirmPassword =
document.getElementById("confirmPassword").value;



if(password !== confirmPassword){

alert("Passwords do not match");

return;

}



let user = {

firstname:
document.getElementById("firstname").value,

middlename:
document.getElementById("middlename").value,

lastname:
document.getElementById("lastname").value,

username:
document.getElementById("username").value,

email:
document.getElementById("email").value,

phone:
document.getElementById("phone").value,

country:
document.getElementById("country").value,

password:
password

};



localStorage.setItem(
"vertexUser",
JSON.stringify(user)
);



alert("Account created successfully");



window.location.href = "login.html";


});