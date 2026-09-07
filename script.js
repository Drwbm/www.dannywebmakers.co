(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;
  const body = document.body;
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  const saved = JSON.parse(localStorage.getItem("dlwm-settings") || "{}");
  $("darkMode").checked = saved.dark === true;
  $("largeText").checked = saved.large === true;
  $("reduceMotion").checked = saved.motion === true;

  function apply() {
    body.classList.toggle("large-text", $("largeText").checked);
    body.classList.toggle("reduce-motion", $("reduceMotion").checked);
    if ($("darkMode").checked) {
      root.style.setProperty("--bg", "#070a0f");
      root.style.setProperty("--surface", "#111720");
    } else {
      root.style.setProperty("--bg", "#0c1017");
      root.style.setProperty("--surface", "#151b24");
    }
    localStorage.setItem("dlwm-settings", JSON.stringify({
      dark: $("darkMode").checked,
      large: $("largeText").checked,
      motion: $("reduceMotion").checked
    }));
  }

  ["darkMode","largeText","reduceMotion"].forEach(id => $(id).addEventListener("change", apply));
  $("resetSettings").addEventListener("click", () => {
    $("darkMode").checked = false;
    $("largeText").checked = false;
    $("reduceMotion").checked = false;
    localStorage.removeItem("dlwm-settings");
    apply();
  });

  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }
  });

  $("year").textContent = new Date().getFullYear();
  apply();
})();
