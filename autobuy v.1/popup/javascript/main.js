const down = document.getElementsByClassName("down");
const guideContainer = document.getElementsByClassName("guide-container");
const detail = document.getElementsByClassName("detail");
const toggleButton = document.getElementsByClassName("toggle-button");
const count = document.getElementsByClassName("countdown");
const dealsReferral = document.getElementById("title-deals-referral").children;
const section = document.getElementsByTagName("section");
const deals = document.getElementById("deals");
const referral = document.getElementById("referral");

// Function got started after Dom content gets loaded

document.addEventListener("DOMContentLoaded", function() {
  preloadMain();
  for (let i = 0; i < down.length; i++) {
    down[i].addEventListener("click", toggleWithDown);
  }

  for (let i = 0; i < toggleButton.length; i++) {
    toggleButton[i].addEventListener("click", toggleBtn);
  }
  for (let i = 0; i < dealsReferral.length; i++) {
    dealsReferral[i].addEventListener("click", toggleDealsReferral);
  }

  countDown();
  toggleActiveStatus();
});
