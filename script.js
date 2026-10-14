
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let message = document.getElementById("message");
    if (name === "" || email === "" || phone === "" ||
        password === "" || confirm === "") {
        message.style.color = "red";
        message.textContent = "All fields are required!";
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.style.color = "red";
        message.textContent = "Enter a valid email!";
    }
    else if (!/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Enter a valid 10-digit phone number!";
    }
    else if (password.length < 8) {
        message.style.color = "red";
        message.textContent = "Password must contain at least 8 characters!";
    }
    else if (!/[A-Z]/.test(password)) {
        message.style.color = "red";
        message.textContent = "Include one uppercase letter!";
    }
    else if (!/[a-z]/.test(password)) {
        message.style.color = "red";
        message.textContent = "Include one lowercase letter!";
    }
    else if (!/[0-9]/.test(password)) {
        message.style.color = "red";
        message.textContent = "Include one number!";
    }
    else if (!/[!@#$%^&*]/.test(password)) {
        message.style.color = "red";
        message.textContent = "Include one special character!";
    }
    else if (password !== confirm) {
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
    }
    else {
        message.style.color = "green";
        message.textContent = "Registration successful!";
    }
});
