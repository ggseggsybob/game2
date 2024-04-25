
        // Get canvas element and context
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Player position and speed
        let coinX = Math.floor(Math.random() * ((canvas.width - 50) - 0 + 1)) + 0;
        let coinY = Math.floor(Math.random() * ((canvas.height - 50) - 0 + 1)) + 0;
        let playerX = canvas.width / 2;
        let playerY = canvas.height / 2;
        let playerSpeed = 500;
        let prevTimestamp = performance.now();

// Update function
    function update() {
    // Calculate delta time
        const currentTimestamp = performance.now();
        const deltaTime = (currentTimestamp - prevTimestamp) / 1000; // Convert milliseconds to seconds
        prevTimestamp = currentTimestamp;

    // Handle user input for player movement
        if (keysDown['ArrowLeft'] && playerX > 5) {
        playerX -= playerSpeed * deltaTime; 
        }
        if (keysDown['ArrowRight'] && playerX + 75 < canvas.width-6) {
        playerX += playerSpeed * deltaTime;
        }
        if (keysDown['ArrowUp'] && playerY > 6) {
        playerY -= playerSpeed * deltaTime;
        }
        if (keysDown['ArrowDown'] && playerY + 75 < canvas.height-4) {
        playerY += playerSpeed * deltaTime;
        }

        if(
            playerX+75 >= coinX &&
            playerX <= coinX+50 &&
            playerY + 75 >= coinY &&
            playerY <= coinY + 50 
        ) {
            coinX = Math.floor(Math.random() * ((canvas.width - 50) - 0 + 1)) + 0;
            coinY = Math.floor(Math.random() * ((canvas.height - 50) - 0 + 1)) + 0;
        }
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw player
        ctx.fillStyle = 'blue';
        ctx.fillRect(playerX, playerY, 75, 75);

        // Draw coin
        ctx.fillStyle = 'yellow';
        ctx.fillRect(coinX, coinY, 50, 50);

        // Request next frame
        requestAnimationFrame(update);
}
        // Key event listeners
        const keysDown = {};

        window.addEventListener('keydown', (event) => {
            keysDown[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            keysDown[event.key] = false;
        });

        // Start the game loop
        requestAnimationFrame(update);
    