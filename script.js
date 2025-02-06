// Select buttons and elements
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const complimentButton = document.getElementById("compliment-button");
const complimentText = document.getElementById("compliment-text");
const meterBar = document.getElementById("meter-bar");
const lovePercent = document.getElementById("love-percent");

// Compliment Generator
const compliments = [
    "You are the light of my life 💖",
    "Every moment with you feels like magic ✨",
    "You make my heart skip a beat 💕",
    "I’m lucky to have you by my side ❤️",
    "You are more beautiful than all the stars in the sky ✨",
];

complimentButton.addEventListener("click", () => {
    const randomCompliment =
        compliments[Math.floor(Math.random() * compliments.length)];
    complimentText.textContent = randomCompliment;
    increaseLoveMeter(5); // Increase the love meter by 5% when the compliment is clicked
});

// Confetti Effect (Heart Confetti)
yesButton.addEventListener("click", () => {
    // Confetti with hearts
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        shapes: ["heart"],
        colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
    });

    // Show a message when "Yes" is clicked
    alert("Yay! I’m so glad you said Yes! 💖");

    // Redirect after saying Yes (You can change this URL)
    window.location.href = "https://www.yourvalentinesurl.com";
});

// Love Meter (Increases on interactions)
let loveProgress = 0; // Represents love progress as a percentage
function increaseLoveMeter(increment) {
    loveProgress += increment;
    if (loveProgress > 100) {
        loveProgress = 100;
    }
    meterBar.style.width = `${loveProgress}%`;
    lovePercent.textContent = `${loveProgress}%`;
}

// No Button (Moves away)
noButton.addEventListener("mouseover", () => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
