const lengthSlider = document.getElementById("lengthRange");
const lengthDisplay = document.getElementById("lengthValue");
const passwordInput = document.getElementById("passwordBox");
const optLower = document.getElementById("optLower");
const optUpper = document.getElementById("optUpper");
const optNumber = document.getElementById("optNumber");
const optSymbol = document.getElementById("optSymbol");
const btnGenerate = document.getElementById("btnGenerate");
const btnCopy = document.getElementById("btnCopy");


const chars = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    nums: "0123456789",
    syms: "!@#$%^&*()-_=+[]{};:,.<>?/"
};

lengthSlider.addEventListener("input", () => {
    lengthDisplay.textContent = lengthSlider.value;
});
btnGenerate.addEventListener("click", () => {
    passwordInput.value = createPassword();
});