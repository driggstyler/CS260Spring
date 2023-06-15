function login() {
  const currUsername = document.querySelector("#usernameInput");
  localStorage.setItem("username", currUsername.value);
  const currPassword = document.querySelector("#passwordInput");
  localStorage.setItem("password", currPassword.value);
  window.location.href = "home.html";
}

function register() {
    const currUsername = document.querySelector("#newUsername");
  localStorage.setItem("username", currUsername.value);
  const currPassword = document.querySelector("#newPassword");
  localStorage.setItem("password", currPassword.value);
  const currEmail = document.querySelector("#newEmail");
  localStorage.setItem("email", currEmail.value);
  window.location.href = "home.html";
}