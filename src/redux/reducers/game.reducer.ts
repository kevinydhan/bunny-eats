import {
    GameState,
    GameActionTypes,
    GameActions,
    GamePhases,
} from '../types/game.types'
import { initializeGame, EntityMap } from '../../utils'

/**
 * Contains the initial state for the Redux store.
 */
const initialState: GameState = {
    /**
     * References the current phase of the game.
     */
    phase: GamePhases['phase:start'],

    /**
     * References the width and height of the game board. Each cell in the
     * board is equivalent to 1 unit.
     */
    dimensions: { width: 0, height: 0 },

    /**
     * References a 2D sparse matrix.
     */
    board: [],

    /**
     * References a tuple containing the player's x- and y-coordinates.
     */
    playerCoordinates: [0, 0],

    /**
     * References the total amount of steps the player takes during the play
     * phase of the game. This number increments by 1 every time a player is
     * successful in moving across the board.
     */
    totalSteps: 0,

    /**
     * References the total number of entities spawned on the board. This value
     * is constant throughout the entire play phase of the game. This value is
     * only changed when the user first starts the game or when the player
     * reinitializes a new board with different dimensions.
     */
    totalEntities: 0,

    /**
     * References the remaining number of entities on the board. This value is
     * decremented every time the player moves on a cell that is occupied by an
     * entity.
     */
    remainingEntities: 0,
}

export default (state = initialState, action: GameActions): GameState => {
    switch (action.type) {
        case GameActionTypes.UPDATE_BOARD_DIMENSIONS:
            return initializeGame(action.payload)

        case GameActionTypes.UPDATE_PLAYER_COORDINATES:
            if (state.phase !== GamePhases['phase:play']) return state

            const oldX = state.playerCoordinates[0]
            const oldY = state.playerCoordinates[1]
            const newX = action.payload[0]
            const newY = action.payload[1]

            const board = [...state.board]

            // Removes the players signature from the old set of coordinates.
            board[oldY][oldX] = 0

            // Checks if new set of coordinates contains any entities.
            let remainingEntities = state.remainingEntities
            if (board[newY][newX] === EntityMap.item) remainingEntities -= 1

            // Checks if there are no more remaining entities.
            let phase: keyof typeof GamePhases = state.phase
            if (!remainingEntities) phase = GamePhases['phase:end']

            // Moves player to the new set of coordinates.
            board[newY][newX] = EntityMap.player

            return {
                ...state,
                phase,
                board,
                remainingEntities,
                playerCoordinates: action.payload,
                totalSteps: state.totalSteps + 1,
            }

        case GameActionTypes.RETRY_LEVEL:
            return initializeGame(state.dimensions)

        case GameActionTypes.RESTART_WITH_DIFFERENT_BOARD_DIMENSIONS:
            return initialState

        default:
            return state
    }
}
