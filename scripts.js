// Toggle Mobile Menu Function
function toggleMobileMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

// Close the mobile menu when a link is clicked
const menuLinks = document.querySelectorAll("#menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  });
});
