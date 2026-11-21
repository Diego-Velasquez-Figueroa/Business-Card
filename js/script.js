(function () {
  "use strict";

  // Tema claro / oscuro (el tema inicial lo define el script del <head>)
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var meta = document.querySelector('meta[name="theme-color"]');

  function update() {
    var light = root.dataset.theme === "light";
    toggle.textContent = light ? "Modo oscuro" : "Modo claro";
    if (meta) meta.content = light ? "#EFE9FA" : "#231B3A";
  }

  toggle.addEventListener("click", function () {
    var next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) { /* almacenamiento no disponible */ }
    update();
  });
  update();
})();
