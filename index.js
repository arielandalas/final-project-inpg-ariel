// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var subBar = document.getElementById("subBar");

// Get the offset position of the navbar
var sticky = subBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    subBar.classList.add("sticky")
  } else {
    subBar.classList.remove("sticky");
  }
}