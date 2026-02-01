(function () {
  // Year in footer
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Mobile nav
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function () {
    var expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("nav-open", !expanded);
  });
})();
