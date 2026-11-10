// Thème : automatique (système) par défaut, ou clair / sombre choisi par le
// visiteur et mémorisé. Appliqué dans <head>, avant l'affichage, sans flash.
(function () {
  var KEY = "syntheo-theme";
  var ORDER = ["auto", "light", "dark"];
  var root = document.documentElement;
  function read() { try { return localStorage.getItem(KEY) || "auto"; } catch (e) { return "auto"; } }
  function apply(mode) {
    if (mode === "light" || mode === "dark") root.setAttribute("data-theme", mode);
    else root.removeAttribute("data-theme");
    var btn = document.querySelector(".theme-toggle");
    if (btn) {
      var label = btn.getAttribute("data-label-" + mode);
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    }
  }
  apply(read());
  document.addEventListener("DOMContentLoaded", function () {
    apply(read());
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = ORDER[(ORDER.indexOf(read()) + 1) % ORDER.length];
      try { localStorage.setItem(KEY, next); } catch (e) {}
      apply(next);
    });
  });
})();
