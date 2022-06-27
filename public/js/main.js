/* ---------------------------------------------------------- */
/* ------------------------- Navbar ------------------------- */
/* ---------------------------------------------------------- */
function openNav() {
  document.querySelector(".header__navbar").style.width = "100%";
}

function closeNav() {
  document.querySelector(".header__navbar").style.width = "0%";
}





/* ---------------------------------------------------------- */
/* ------------------------- Footer ------------------------- */
/* ---------------------------------------------------------- */
// Get the button
var scrollButton = document.querySelector(".footer__move-up");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}