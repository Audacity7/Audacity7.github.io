// Select buttons and elements
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const emojiContainer = document.getElementById("emoji-container");

// Confetti Effect (Heart Confetti)
yesButton.addEventListener("click", () => {
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        shapes: ["heart"],
        colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
    });
    alert("Yay! I’m so glad you said Yes! 💖");
    window.location.href = "https://www.yourvalentinesurl.com";
});

// No Button (Mobile-optimized - Touch Events)
let isTouchingNo = false; // Prevent continuous movement when tapping
noButton.addEventListener("touchstart", (e) => {
    if (!isTouchingNo) {
        isTouchingNo = true;
        moveNoButton();
    }
});

// Mobile-specific touchmove event
noButton.addEventListener("touchmove", (e) => {
    moveNoButton();
});

// For Mouse users: mouseover still works
noButton.addEventListener("mouseover", () => {
    moveNoButton();
});

// Function to move the "No" button randomly
function moveNoButton() {
    let maxX = window.innerWidth - noButton.clientWidth;
    let maxY = window.innerHeight - noButton.clientHeight;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Reset touch after a short time so it doesn't keep moving
noButton.addEventListener("touchend", () => {
    isTouchingNo = false;
});
// Cute Emojis Floating Around
const emojis = ["💖", "🐻", "🌸", "💕", "💘", "🦄", "🍓"];
function createEmoji() {
    const emoji = document.createElement("span");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random position
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 100);
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    emoji.style.position = "absolute";

    // Click effect (emoji disappears + confetti)
    emoji.addEventListener("click", () => {
        confetti({
            particleCount: 10,
            spread: 50,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight },
            shapes: ["heart"],
            colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
        });

        emoji.remove(); // Remove clicked emoji
        setTimeout(createEmoji, 1000); // Respawn a new emoji after 1 sec
    });

    emojiContainer.appendChild(emoji);
}

// Generate multiple floating emojis
for (let i = 0; i < 5; i++) {
    createEmoji();
}
