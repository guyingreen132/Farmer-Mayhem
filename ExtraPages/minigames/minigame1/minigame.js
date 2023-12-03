const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const playerImage = new Image();
playerImage.src = '../../../assets/player.png';

const plantImage = new Image();
plantImage.src = '../../../assets/plant.png';

const grassImage = new Image();
grassImage.src = '../../../assets/grass.png';

// Wait for all images to load before starting the game loop
Promise.all([playerImage, plantImage, grassImage].map(img => {
    return new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
    });
})).then(() => {
    // Start the game loop once all images are loaded
    gameLoop();
}).catch((error) => {
    console.error("Error loading images:", error);
});


const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    speed: 5
};

const plant = {
    x: Math.random() * (canvas.width - 50),
    y: Math.random() * (canvas.height - 50),
    width: 50,
    height: 50
};

function draw() {
    // Draw background
    ctx.drawImage(grassImage, 0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    // Draw plant
    ctx.drawImage(plantImage, plant.x, plant.y, plant.width, plant.height);
}

function update() {
    // Move player towards the mouse
    const dx = mouse.x - player.x;
    const dy = mouse.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 1) {
        player.x += (dx / distance) * player.speed;
        player.y += (dy / distance) * player.speed;
    }

    // Check if player touched the plant
    if (
        player.x < plant.x + plant.width &&
        player.x + player.width > plant.x &&
        player.y < plant.y + plant.height &&
        player.y + player.height > plant.y
    ) {
        // Player touched the plant, reposition it randomly
        plant.x = Math.random() * (canvas.width - 50);
        plant.y = Math.random() * (canvas.height - 50);
    }
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Mouse position
const mouse = {
    x: 0,
    y: 0
};

// Update mouse position on move
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
});

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Start the game loop
gameLoop();
