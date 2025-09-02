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
btnCopy.addEventListener("click", () => {
    if (passwordInput.value) {
        navigator.clipboard.writeText(passwordInput.value);
        alert("✅ Password copied to clipboard!");
    } else {
        alert("⚠️ No password to copy!");
    }
});
function createPassword() {
    let selectedChars = "";
    let password = "";

    if (optLower.checked) selectedChars += chars.lower;
    if (optUpper.checked) selectedChars += chars.upper;
    if (optNumber.checked) selectedChars += chars.nums;
    if (optSymbol.checked) selectedChars += chars.syms;

    let passLength = parseInt(lengthSlider.value);

    if (selectedChars === "") {
        return "⚠️ Select at least one option!";
    }

    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * selectedChars.length);
        password += selectedChars[randomIndex];
    }

    return password;
}