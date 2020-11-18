
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");
var nameButtons=document.getElementById("nameButtons");

var sticky = 150;

var stickyButton = 190;

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    nameButtons.classList.add("stickyButtons");
  } else {
    navbar.classList.remove("sticky");
    nameButtons.classList.remove("stickyButtons");
  }

  if (window.pageYOffset >= stickyButton) {
    nameButtons.classList.add("stickyButtons");
  } else { 
    nameButtons.classList.remove("stickyButtons");
  }
}