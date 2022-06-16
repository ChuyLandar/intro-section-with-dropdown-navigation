const backdrop = document.querySelector(".backdrop");
const toggleButton = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close-menu img");


function closeMobileNav(){
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}


backdrop.addEventListener("click", function() {
  closeMobileNav();
});


toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});


closeMenu.addEventListener("click", function() {
  closeMobileNav();
});