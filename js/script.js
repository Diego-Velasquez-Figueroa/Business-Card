(function () {
  "use strict";

  // Tema claro / oscuro (el tema inicial lo define el script del <head>)
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function updateLabel() {
    toggle.textContent = root.dataset.theme === "light" ? "Modo oscuro" : "Modo claro";
  }

  toggle.addEventListener("click", function () {
    var next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) { /* almacenamiento no disponible */ }
    updateLabel();
  });
  updateLabel();

  // Portada de Coven: si existe assets/images/coven-cover.png, reemplaza el espacio reservado
  var img = document.getElementById("cover-img");
  var placeholder = document.getElementById("cover-ph");

  function showCover() {
    img.hidden = false;
    placeholder.hidden = true;
  }

  if (img.complete && img.naturalWidth > 0) {
    showCover();
  } else {
    img.addEventListener("load", showCover);
  }
})();
