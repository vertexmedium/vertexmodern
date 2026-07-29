const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const loginUser = document.getElementById("loginUser").value.trim();

    const loginPassword = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("vertexUser"));

    if(!savedUser){
        alert("No account found. Please register first.");
        return;
    }

    if(
        (loginUser === savedUser.username || loginUser === savedUser.email)
        &&
        loginPassword === savedUser.password
    ){

        localStorage.setItem("loggedInUser", savedUser.username);

        window.location.href = "loading.html";

    }else{

        alert("Invalid username/email or password.");

    }

});