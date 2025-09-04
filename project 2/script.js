const imgsrc = document.getElementById("imagesrc");
const btn = document.getElementById("btn");
const userInput = document.getElementById("userInput");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    generateqr();
});

function generateqr() {
    const input = userInput.value.trim();
    if (input === "") {
        alert("Please enter some text or URL to generate a QR code.");
        return;
    }
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;
    imgsrc.src = url;
}