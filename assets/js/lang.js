// Langue : anglais par défaut ; un navigateur en français est envoyé sur la
// version française de la page à sa première visite. Un choix explicite (lien EN/FR) est mémorisé et prime.
(function () {
  var KEY = "syntheo-lang";
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  var path = location.pathname;
  var onFr = path === "/fr" || path.indexOf("/fr/") === 0;
  if (!stored && !onFr) {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    if (String(langs[0] || "").toLowerCase().indexOf("fr") === 0) {
      // Version française de la page courante (lien hreflang="fr"), sinon l'accueil.
      var alt = document.querySelector('link[rel="alternate"][hreflang="fr"]');
      var target = alt ? new URL(alt.getAttribute("href"), location.href).pathname : "/fr/";
      location.replace(target + location.hash);
      return;
    }
  }
  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[data-lang]");
    if (!link) return;
    try { localStorage.setItem(KEY, link.getAttribute("data-lang")); } catch (e) {}
  });
})();
