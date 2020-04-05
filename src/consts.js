/**
 * Defines the different game states. This is used to control which components
 * to display and how the components should behave at a given game state.
 */
export const GAME_STATES = {
    0: 'state:start',
    1: 'state:play',
    2: 'state:end',
    'state:start': 0,
    'state:play': 1,
    'state:end': 2,
}

/**
 * Defines the minimum and maximum dimensions for the board. This is used to
 * check the user input when the game prompts the user to enter a width and
 * height for the board.
 */
export const VALID_BOARD_DIMENSIONS = {
    width: { min: 5, max: 20 },
    height: { min: 5, max: 20 },
}
