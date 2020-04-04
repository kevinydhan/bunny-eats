/**
 * Below are the type declarations related to the game reducer and actions.
 */

// -----------------------------------------------------------------------------
// General Redux types
// -----------------------------------------------------------------------------

/**
 * Defines the different action types used between the game actions and reducer.
 */
export enum GameActionTypes {
    UPDATE_BOARD_DIMENSIONS,
    UPDATE_PLAYER_COORDINATES,
    RETRY_LEVEL,
    RESTART_WITH_DIFFERENT_BOARD_DIMENSIONS,
}

// -----------------------------------------------------------------------------
// Reducer-related types
// -----------------------------------------------------------------------------

/**
 * Defines the different phases for the game. The phases control which
 * components should be rendered.
 */

export enum GamePhases {
    'phase:start' = 'phase:start',
    'phase:play' = 'phase:play',
    'phase:end' = 'phase:end',
}

/**
 * Defines the state for the game reducer.
 */
export interface GameState {
    phase: keyof typeof GamePhases
    dimensions: BoardDimensions
    board: SparseMatrix
    playerCoordinates: XYCoordinate
    totalSteps: number
    totalEntities: number
    remainingEntities: number
}

// -----------------------------------------------------------------------------
// Action-related types
// -----------------------------------------------------------------------------

/**
 * Defines the action where the user updates the board dimensions.
 */
export interface UpdateBoardDimensionsAction {
    type: GameActionTypes.UPDATE_BOARD_DIMENSIONS
    payload: BoardDimensions
}

/**
 * Defines the action where the user updates the player coordinates.
 */
export interface UpdatePlayerCoordinatesAction {
    type: GameActionTypes.UPDATE_PLAYER_COORDINATES
    payload: XYCoordinate
}

/**
 * Defines the action where the user proceeds to retry the same level.
 */
export interface RetryLevelAction {
    type: GameActionTypes.RETRY_LEVEL
}

/**
 * Defines the action where the user proceeds to restart the game with
 * different board dimensions.
 */
export interface RestartWithDifferentBoardDimensionsAction {
    type: GameActionTypes.RESTART_WITH_DIFFERENT_BOARD_DIMENSIONS
}

/**
 * Defines all of the actions accepted by the game reducer.
 */
export type GameActions =
    | UpdateBoardDimensionsAction
    | UpdatePlayerCoordinatesAction
    | RetryLevelAction
    | RestartWithDifferentBoardDimensionsAction
