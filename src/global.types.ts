/**
 * Defines a tuple containing x- and y-coordinates.
 *
 * @example [4, 5]
 */
type XYCoordinate = [number, number]

/**
 * Defines the object containing the board dimensions.
 *
 * @example { width: 12, height: 12 }
 */
type BoardDimensions = {
    width: number
    height: number
}

/**
 * Defines a zero matrix.
 *
 * @example [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 */
type ZeroMatrix = Array<Array<0>>

/**
 * Defines a sparse matrix.
 *
 * @example [[1, 0, 0], [0, 2, 0], [0, 0, 1]]
 */
type SparseMatrix = Array<Array<number>>
