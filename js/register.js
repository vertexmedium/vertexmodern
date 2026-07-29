const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        firstName: document.getElementById("firstname").value.trim(),
        middleName: document.getElementById("middlename").value.trim(),
        lastName: document.getElementById("lastname").value.trim(),
        username: document.getElementById("username").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        country: document.getElementById("country").value,
        password: document.getElementById("password").value
    };

    const confirmPassword = document.getElementById("confirmPassword").value;

    if (user.password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Temporary storage (we'll replace this with a real database later)
    localStorage.setItem("vertexUser", JSON.stringify(user));

    alert("Registration successful!");

    window.location.href = "login.html";
});