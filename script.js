let images = ["Gemini_Generated_Image_p8q0nop8q0nop8q0.PNG", "LIV.PNG", "HAEUN.PNG", "MINA.PNG", "JIYU>PNG"];
let index = 0;

function showImage() {
    document.getElementById("mainImage").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Auto change every 4 seconds
setInterval(nextImage, 4000);

// Like toggle
function likeImage() {
    let heart = document.querySelector(".heart");
    heart.textContent = heart.textContent === "♡" ? "♥" : "♡";
}
