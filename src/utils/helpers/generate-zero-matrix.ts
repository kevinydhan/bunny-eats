/**
 * Generates a zero matrix.
 *
 * @example
 * generateZeroMatrix({ width: 3, height: 3 })
 * // [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *
 * @param {BoardDimensions} dimensions - Board dimensions
 *
 * @returns {ZeroMatrix} - Zero matrix
 */
export default (dimensions: BoardDimensions): ZeroMatrix => {
    const { width, height } = dimensions
    const board: ZeroMatrix = []

    for (let i = 0; i < height; ++i) board.push(Array(width).fill(0))

    return board
}
