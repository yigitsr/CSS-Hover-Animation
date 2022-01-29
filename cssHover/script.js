// buttons
const btnPop = document.getElementById("borderPop");
const btnSlide = document.getElementById("backSlide");
const btnCircle = document.getElementById("backCircle");
const btnUnder = document.getElementById("borderUnder");
const btnSand = document.getElementById("slidingSand");
const btnGlow = document.getElementById("glow");
const btnDouble = document.getElementById("double");
const btnBorder = document.getElementById("border");
const btnFill = document.getElementById("fill");

// p tags when click on the buttons
btnPop.addEventListener("click", () => {
  navigator.clipboard.writeText(borderCSS.innerText);
});

btnSlide.addEventListener("click", () => {
  navigator.clipboard.writeText(backSlideCSS.innerText);
});

btnCircle.addEventListener("click", () => {
  navigator.clipboard.writeText(backCircleCSS.innerText);
});

btnUnder.addEventListener("click", () => {
  navigator.clipboard.writeText(borderUnderCSS.innerText);
});

btnSand.addEventListener("click", () => {
  navigator.clipboard.writeText(slidingCSS.innerText);
});

btnGlow.addEventListener("click", () => {
  navigator.clipboard.writeText(glowCSS.innerText);
});

btnDouble.addEventListener("click", () => {
  navigator.clipboard.writeText(doubleCSS.innerText);
});

btnBorder.addEventListener("click", () => {
  navigator.clipboard.writeText(borderTwoCSS.innerText);
});

btnFill.addEventListener("click", () => {
  navigator.clipboard.writeText(fillCSS.innerText);
});