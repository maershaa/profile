export function initThemeToggle() {
  const toggle = document.getElementById("theme-switch");
  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggle.checked = savedTheme === "dark";
  }

  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
}
