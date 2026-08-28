const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.addEventListener("click", function () {
    window.location.href = "photos.html";
});

const messages = [
    "Are you sure? 🥺",
    "Think again 😭❤️",
    "Wrong button 😂",
    "You can't escape me 😜💕",
    "Just click YES ❤️"
];

let messageIndex = 0;

function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    message.textContent = messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;
}

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("click", moveNoButton);

noBtn.addEventListener("touchstart", function (event) {
    event.preventDefault();
    moveNoButton();
});