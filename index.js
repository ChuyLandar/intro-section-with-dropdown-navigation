var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".menu-icon");
var mobileNav = document.querySelector(".mobile-nav");


backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
});


toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});