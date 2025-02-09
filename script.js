// Select elements
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const emojiContainer = document.getElementById("emoji-container");
const heading = document.querySelector("h1");
const gameContainer = document.querySelector(".game-container"); // Reference to the game container

// List of progressive questions
const questions = [
    "Would you be my Valentine?",
    "Are you absolutely sure?",
    "You know there's no going back, right?",
    "This comes with unlimited hugs and kisses. Still in?",
    "Final chance to escape... no? Good.",
    "Okay, but you’re legally obligated to say 'I love you' daily now."
];

let questionIndex = 0; // Track current question
let fontSize = 2; // Initial font size (in em units)
let yesSizeMultiplier = 1; // Track button growth

// Yes Button Click Event
yesButton.addEventListener("click", () => {
    if (questionIndex < questions.length - 1) {
        questionIndex++; // Move to the next question
        heading.textContent = questions[questionIndex];

        // Decrease the font size with each "Yes" click (by 0.1 em)
        fontSize *= 0.9; // Decrease font size by 10%
        heading.style.fontSize = `${fontSize}em`; // Apply the new font size to the question

        // Increase button size noticeably (1.5x each time)
        yesSizeMultiplier *= 1.1;
        yesButton.style.transform = `scale(${yesSizeMultiplier})`;

    } else {
        // Last question -> Trigger confetti
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { x: 0.5, y: 0.5 },
            shapes: ["heart"],
            colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
        });

        // Clear the existing content in the box and show new content
        heading.innerHTML = ''; // Clears the question text (you can clear other elements if needed)
        yesButton.style.display = "none"; // Hide the "Yes" button
        noButton.style.display = "none"; // Hide the "No" button

        // Show the message and the GIF in the same box (the box where the question was displayed)
        heading.innerHTML = ` 
            <h3>Yayay, I had no doubt you'd say yes!</h3>
            <img src="https://i.pinimg.com/originals/1e/c5/38/1ec5380287a1eb3abd0faa66febeb081.gif" alt="Celebration GIF" style="width: 50%; height: auto;">
        `;
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

// Floating Images
const images = [
    "https://media.discordapp.net/attachments/924018917846970422/1337996546326925352/Fluttershy_-_My_Little_Pony_Fluttershy_PNG_Transparent_With_Clear_Background_ID_220710___TopPNG-Photoroom.png?ex=67a979e3&is=67a82863&hm=e63dc12e6329c67bc147084ea88e3a3838297154d56a89e113f557b4886bb0f6&=&format=webp&quality=lossless&width=656&height=671", 
    "https://media.discordapp.net/attachments/924018917846970422/1337997888839745637/pngtree-cute-panda-with-love-heart-cartoon-png-image_14145286-removebg-preview.png?ex=67a97b23&is=67a829a3&hm=c1fefa61fca0098e661fd5fe627f3f8d55f6c9272f1994b2272e9c9dbf5b7d1e&=&format=webp&quality=lossless", 
    "https://media.discordapp.net/attachments/924018917846970422/1337996970836492348/CITYPNG.COMKawaii_Hello_Kitty_Character_HD_Transparent_Background_-_1500x1500.png?ex=67a97a48&is=67a828c8&hm=157a7a795d8ea5716b6d423e3a08442a3d71bdb69ceccbcd213d7dfe2cfc4b97&=&format=webp&quality=lossless&width=671&height=671",
    "https://media.discordapp.net/attachments/924018917846970422/1337998478160171119/pngtree-cute-pink-heart-with-black-eyes-anime-or-manga-character-png-image_15511295.png?ex=67a97bb0&is=67a82a30&hm=d03e1cdf78d7ade85c728820a853833706e2f117b2998abe1ec25a86d0850a24&=&format=webp&quality=lossless&width=671&height=671"
];

function createImage() {
    const image = document.createElement("img");
    image.classList.add("emoji");
    image.src = images[Math.floor(Math.random() * images.length)];
    image.alt = "floating image";
    image.style.width = "2em"; // Adjust the size to match emojis
    image.style.height = "2em"; // Adjust the size to match emojis
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 100);
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.position = "absolute";

    image.addEventListener("click", () => {
        confetti({
            particleCount: 10,
            spread: 50,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight },
            shapes: ["heart"],
            colors: ["#ff6f61", "#ff8c94", "#f7c6c6"],
        });

        image.remove();
        setTimeout(createImage, 1000);
    });

    emojiContainer.appendChild(image);
}

// Generate floating images
for (let i = 0; i < 4; i++) {
    createImage();
}
