const menu = document.getElementById("menu");
menu.addEventListener("click", function () {
  menu.classList.toggle("open");
  const nav = document.getElementById("nav");
  nav.classList.toggle("show");
})
