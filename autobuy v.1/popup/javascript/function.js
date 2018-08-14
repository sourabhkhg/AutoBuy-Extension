//Different types of used function in this Extension is declared Here

//Function to toggle between two content with given down button
function toggleWithDown() {
  if (guideContainer[this.id].style.display === "block") {
    guideContainer[this.id].style.display = "none";
    detail[this.id].style.display = "block";
  } else {
    guideContainer[this.id].style.display = "block";
    detail[this.id].style.display = "none";
  }
}

//Function for custom designrd toggle button and storing data in local storage
function toggleBtn() {
  this.classList.toggle("active");
  chrome.storage.sync.set({ status: toggleBtnStatus(this) }, function() {});
}

//Function which provides the count sale button in any item
function countDown() {
  var countDownDate = new Date("Aug 16 2018 15:02:36").getTime();
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    count[0].innerHTML = days + "d " + hours + ":" + minutes + ":" + seconds;

    if (distance < 0) {
      clearInterval(x);
      count[0].innerHTML = "EXPIRED";
      count[1].innerHTML = "EXPIRED";
    }
  }, 1000);
}

//Function return status of active class in current element
function toggleBtnStatus(e) {
  let status = e.classList.contains("active");
  return status;
}

//Function to Toggle between Deals and Referral
function toggleDealsReferral() {
  for (let i = 0; i < dealsReferral.length; i++) {
    dealsReferral[i].children[0].style.borderBottomColor = "transparent";
    section[i].style.display = "none";
  }
  this.children[0].style = "border-bottom:2px solid #0070e0b8;";
  if (this.id == "connect-deals") {
    deals.style.display = "block";
  } else if (this.id == "connect-referral") {
    referral.style.display = "block";
  }
}

//Function to block and None the element just after page load
function preloadMain() {
  for (let i = 0; i < down.length; i++) {
    guideContainer[i].style.display = "block";
    detail[i].style.display = "none";
  }
  dealsReferral[0].children[0].style = "border-bottom:2px solid #0070e0b8;";
  section[1].style.display = "none";
}

//Function to retain active status of toggle button from local storage
function toggleActiveStatus() {
  chrome.storage.sync.get("status", function(update) {
    if (update.status === true) {
      console.log(update.status);
      toggleButton[0].classList.add("active");
    } else {
      toggleButton[0].classList.remove("active");
    }
  });
}

//Function to toggle between login and signup page
function toggleLoginSignup() {
  for (let i = 0; i < section.length; i++) {
    section[i].style.display = "none";
    loginSignup[i].children[0].style.borderBottomColor = "transparent";
  }
  section[this.id].style.display = "block";
  console.log(this.children[0]);
  this.children[0].style = "border-bottom:2px solid  #0070e0b8;";
}

//Function to load some style in signup as soon as the document gets loaded
function preloadSignup() {
  section[1].style.display = "none";
  loginSignup[0].children[0].style = "border-bottom:2px solid  #0070e0b8;";
}
