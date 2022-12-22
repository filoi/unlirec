const loginPassword = document.getElementById("login_password");
const togglePassword = document.getElementById("toggle_password");

function togglePasswordClick() {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
    } else {
        loginPassword.type = "password";
    }
    loginPassword.classList.toggle('visible');
}