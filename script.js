// Select buttons and elements
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const meterBar = document.getElementById('meter-bar');
const lovePercent = document.getElementById('love-percent');

// Confetti Effect (Heart Confetti)
yesButton.addEventListener('click', () => {
  // Confetti with hearts
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    shapes: ['heart'],
    colors: ['#ff6f61', '#ff8c94', '#f7c6c6'],
  });

  // Show a message when "Yes" is clicked
  alert('Yay! I’m so glad you said Yes! 💖');

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

// No Button (Mobile-optimized - Touch Events)
let isTouchingNo = false; // Prevent continuous movement when tapping
noButton.addEventListener('touchstart', (e) => {
  if (!isTouchingNo) {
    isTouchingNo = true;
    moveNoButton();
  }
});

// Mobile-specific touchmove event
noButton.addEventListener('touchmove', (e) => {
  moveNoButton();
});

// For Mouse users: mouseover still works
noButton.addEventListener('mouseover', () => {
  moveNoButton();
});

// Function to move the "No" button randomly
function moveNoButton() {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

// Reset touch after a short time so it doesn't keep moving
noButton.addEventListener('touchend', () => {
  isTouchingNo = false;
});