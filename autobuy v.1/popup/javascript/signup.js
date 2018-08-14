const loginSignup = document.getElementsByClassName("login-signup-title-box");
const section = document.getElementsByTagName("section");

// Function got started after Dom content gets loaded
document.addEventListener("DOMContentLoaded", function() {
  preloadSignup();
  for (let i = 0; i < loginSignup.length; i++) {
    loginSignup[i].addEventListener("click", toggleLoginSignup);
  }
});
