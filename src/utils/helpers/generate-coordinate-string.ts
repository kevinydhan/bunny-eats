/**
 * Defines the accepted keys for `generateCoordinateString()`.
 */
export enum GenerateCoordinateStringKeys {
    middle = 'middle',
    random = 'random',
}

/**
 * Generates a comma-separated x- and y-coordinate pair of the middle of the board based on the input dimensions.
 *
 * @example
 * getMiddleCoordinates({ width: 9, height: 9 }) // '4,4'
 *
 * @param {BoardDimensions} dimensions - Board dimensions
 * @param {keyof typeof GenerateCoordinateStringKeys} [key=GenerateCoordinateStringKeys.random] -
 * Key which instructs the function to generate a specific type of coordinate
 *
 * @returns {string} - Comma-separated x- and y-coordinates
 */
export default (
    dimensions: BoardDimensions,
    key: keyof typeof GenerateCoordinateStringKeys = GenerateCoordinateStringKeys.random
): string => {
    const { width, height } = dimensions
    let x: number
    let y: number

    switch (key) {
        case GenerateCoordinateStringKeys.middle:
            x = Math.floor(width / 2)
            y = Math.floor(height / 2)
            break

        case GenerateCoordinateStringKeys.random:
        default:
            x = Math.floor(Math.random() * width)
            y = Math.floor(Math.random() * height)
    }

    return `${x},${y}`
}
