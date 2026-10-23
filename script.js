let count = 0;
const countDisplay = document.getElementById("click-count");
const counterBtn = document.getElementById("counter-btn");
const themeBtn = document.getElementById("theme-btn");

// Counter button logic
counterBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Light/Dark mode toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});