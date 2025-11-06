// Local Storage based simple signup/login system
function signup() {
  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful! Please login now.");
    showLogin();
  } else {
    alert("Please fill all fields!");
  }
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");
  let name = localStorage.getItem("userName");

  if (email === storedEmail && password === storedPassword) {
    document.getElementById("userName").innerText = name;
    showHome();
  } else {
    alert("Invalid email or password!");
  }
}

function logout() {
  showLogin();
}

function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("homePage").classList.add("hidden");
}

function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("homePage").classList.add("hidden");
}

function showHome() {
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}