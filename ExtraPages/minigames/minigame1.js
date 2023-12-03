const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load images
const backgroundImage = new Image();
backgroundImage.src = "../../assets/Grass.png";

const playerImage = new Image();
playerImage.src = "../../assets/Sell.png";

// Player object
const player = {
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    speed: 5
};

// Update function
function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    // Move player towards the mouse
    const dx = mouseX - player.x - player.width / 2;
    const dy = mouseY - player.y - player.height / 2;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance > player.speed) {
        player.x += (dx / distance) * player.speed;
        player.y += (dy / distance) * player.speed;
    }

    // Check for collision with the player
    if (
        player.x < mouseX &&
        player.x + player.width > mouseX &&
        player.y < mouseY &&
        player.y + player.height > mouseY
    ) {
        // Game over
        alert("Game Over! The player caught you.");
        resetGame();
    }

    // Request next animation frame
    requestAnimationFrame(update);
}

// Reset the game
function resetGame() {
    player.x = 50;
    player.y = 50;
}

// Mouse position
let mouseX = 0;
let mouseY = 0;

// Update mouse position
function updateMousePosition(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

// Event listeners
window.addEventListener('mousemove', updateMousePosition);

// Append the canvas to the body
document.body.appendChild(canvas);

// Start the game loop
update();
