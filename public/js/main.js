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






/* ---------------------------------------------------------- */
/* --------------------------- MAP -------------------------- */
/* ---------------------------------------------------------- */
let map = document.getElementById("map");
let paths = map.querySelectorAll(".map__image a");
let links = map.querySelectorAll(".map__list a");


let activeArea = (id) => {
  map.querySelectorAll('.is-active').forEach((item) => {
    item.classList.remove('is-active');
  });

  if (id !== undefined) {
    document.querySelector("#list-" + id).classList.add("is-active");
    document.getElementById(id).classList.add("is-active");
  }
}


paths.forEach((path) => {
  path.addEventListener("mouseenter", () => {
    let id = path.id;
    activeArea(id);
  });
});


links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    let id = link.id.replace('list-', '');
    activeArea(id);
  });
});


map.addEventListener("mouseover", () => {
  activeArea();
})



/* ---------------------------------------------------------- */
/* --------------------------- AOS -------------------------- */
/* ---------------------------------------------------------- */
//AOS.init();