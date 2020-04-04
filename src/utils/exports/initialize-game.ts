import generateZeroMatrix from '../helpers/generate-zero-matrix'
import generateCoordinateString, {
    GenerateCoordinateStringKeys,
} from '../helpers/generate-coordinate-string'
import { GameState, GamePhases } from '../../redux/types/game.types'

export enum EntityMap {
    player = 1,
    item = 2,
}

export default (dimensions: BoardDimensions): GameState => {
    const { middle, random } = GenerateCoordinateStringKeys
    const { width, height } = dimensions

    // Constructs a new 2D matrix.
    const board: number[][] = generateZeroMatrix(dimensions)

    // Gets the player coordinates.
    const playerCoordinates = generateCoordinateString(dimensions, middle)

    // Creates a map containing x- and y-coordinates as the key and the
    // entity's id as the value.
    const entityMap = { [playerCoordinates]: EntityMap.player }

    // Calculates the number of entities to put on the map.
    const numberOfEntities = Math.round(Math.sqrt(width * height))

    // Keeps track of how many entities to spawn.
    let counter = numberOfEntities

    // Points to the current genererated coordinate string.
    let currentCoordinate: string

    // Generates unique coordinates based on the number of entities.
    while (counter) {
        currentCoordinate = generateCoordinateString(dimensions, random)
        if (!entityMap[currentCoordinate]) {
            entityMap[currentCoordinate] = EntityMap.item
            counter--
        }
    }

    // Places the entities on the board.
    Object.entries(entityMap).forEach(([coord, entityId]) => {
        const [x, y] = coord.split(',')
        board[Number(y)][Number(x)] = entityId
    })

    return {
        phase: GamePhases['phase:play'],
        dimensions,
        board,
        totalSteps: 0,
        totalEntities: numberOfEntities,
        remainingEntities: numberOfEntities,
        playerCoordinates: playerCoordinates
            .split(',')
            .map((e) => Number(e)) as [number, number],
    }
}
