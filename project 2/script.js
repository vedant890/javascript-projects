const imgsrc = document.getElementById("imagesrc");
const userInput = document.getElementById("userInput");

function generateqr(){
    const input = userInput.value;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`
    imgsrc.src = url;
}

