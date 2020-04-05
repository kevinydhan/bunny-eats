## Features
These are the features that need to be implemented in the project:
- Adjustable board size based on user input
- The spawning of the player near the center of the board
- The spawning of green sprites on random spaces on the board
- Ability to move the character around using either arrow or WASD keys
- Counter that keeps track of the number of steps the player takes

## Game States
- state:start
  - Asks user for board size
- state:play
  - Initializes board
  - Spawns player and green sprites
  - Player is able to user WASD or arrow keys to move
- state:end
  - Displays total number of steps made
  - Asks player if he/she wants to retry