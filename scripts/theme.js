function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
}

setTheme(getInitialTheme());
document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
