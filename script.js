// Select elements
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const emojiContainer = document.getElementById("emoji-container");
const heading = document.querySelector("h1");

// List of progressive questions
const questions = [
    "Would you be my Valentine?",
    "Are you absolutely sure?",
    "You know there's no going back, right?",
    "This comes with unlimited hugs and memes. Still in?",
    "Final chance to escape... no? Good.",
    "Okay, but you’re legally obligated to say 'I love you' daily now."
];

let questionIndex = 0; // Track current question
let yesSizeMultiplier = 1; // Track button growth

// Yes Button Click Event
yesButton.addEventListener("click", () => {
    if (questionIndex < questions.length - 1) {
        questionIndex++; // Move to the next question
        heading.textContent = questions[questionIndex];

        // Increase button size noticeably (1.5x each time)
        yesSizeMultiplier *= 1.2;
        yesButton.style.transform = `scale(${yesSizeMultiplier})`;
    } else {
        // Last question -> Trigger confetti + Redirect
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
            shapes: ["heart"],
            colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
        });
        alert("Yay! I’m so glad you said Yes! 💖");
        window.location.href = "https://www.yourvalentinesurl.com";
    }
});

// No Button Movements
let isTouchingNo = false;
noButton.addEventListener("touchstart", () => {
    if (!isTouchingNo) {
        isTouchingNo = true;
        moveNoButton();
    }
});
noButton.addEventListener("touchmove", moveNoButton);
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("touchend", () => {
    isTouchingNo = false;
});

// Function to move the "No" button
function moveNoButton() {
    let maxX = window.innerWidth - noButton.clientWidth;
    let maxY = window.innerHeight - noButton.clientHeight;
    let x = Math.random() * maxX;
    let y = Math.random() * maxY;
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

// Floating Emojis
const emojis = ["💖", "🐻", "🌸", "💕", "💘", "🦄", "🍓"];
function createEmoji() {
    const emoji = document.createElement("span");
    emoji.classList.add("emoji");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 100);
    emoji.style.left = `${x}px`;
    emoji.style.top = `${y}px`;
    emoji.style.position = "absolute";

    emoji.addEventListener("click", () => {
        confetti({
            particleCount: 10,
            spread: 50,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight },
            shapes: ["heart"],
            colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
        });

        emoji.remove();
        setTimeout(createEmoji, 1000);
    });

    emojiContainer.appendChild(emoji);
}

// Generate floating emojis
for (let i = 0; i < 5; i++) {
    createEmoji();
}
