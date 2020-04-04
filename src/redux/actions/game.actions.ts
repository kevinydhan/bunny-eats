import {
    GameActionTypes,
    UpdateBoardDimensionsAction,
    UpdatePlayerCoordinatesAction,
    RetryLevelAction,
    RestartWithDifferentBoardDimensionsAction,
} from '../types/game.types'

/**
 * Updates the board dimensions. This function is a Redux action.
 *
 * @param {BoardDimensions} dimensions - Board dimensions
 */
export const updateBoardDimensions = (
    dimensions: BoardDimensions
): UpdateBoardDimensionsAction => {
    return {
        type: GameActionTypes.UPDATE_BOARD_DIMENSIONS,
        payload: dimensions,
    }
}

/**
 * Updates the player's coordinates. This function is a Redux action.
 *
 * @param {XYCoordinate} playerCoordinates - Tuple containting x- and y-
 * coordinates
 */
export const updatePlayerCoordinates = (
    playerCoordinates: XYCoordinate
): UpdatePlayerCoordinatesAction => {
    return {
        type: GameActionTypes.UPDATE_PLAYER_COORDINATES,
        payload: playerCoordinates,
    }
}

/**
 * Updates the Redux store to initialize a new game with the same board
 * dimensions.
 */
export const retryLevel = (): RetryLevelAction => {
    return { type: GameActionTypes.RETRY_LEVEL }
}

/**
 * Updates the Redux store to change the game phase and trigger an
 * initialization of a new game with different board dimensions.
 */
export const restartWithDifferentBoardDimensions = (): RestartWithDifferentBoardDimensionsAction => {
    return { type: GameActionTypes.RESTART_WITH_DIFFERENT_BOARD_DIMENSIONS }
}
