let count = 0;
const countDisplay = document.getElementById("click-count");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
const themeBtn = document.getElementById("theme-btn");

// Increment logic
incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Reset logic
resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// Theme switcher with memory (localStorage)
const savedTheme = localStorage.getItem("preferred-theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem("preferred-theme", isLight ? "light" : "dark");
});