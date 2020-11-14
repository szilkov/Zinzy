
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("navbar");
var nameButtons=document.getElementById("nameButtons");

var sticky = 150;

var stickyButton = 190;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
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