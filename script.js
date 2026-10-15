const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
menuToggle?.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "Close ×" : "Menu ☰";
});
primaryNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  primaryNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  if (menuToggle) menuToggle.textContent = "Menu ☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
