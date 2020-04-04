// React modules
import React, { Component } from 'react'
import BoardSizePrompt from './BoardSizePrompt'
import Board from './Board'
import GameOverPrompt from './GameOverPrompt'

// Redux modules
import { connect, MapDispatchToProps } from 'react-redux'
import { updatePlayerCoordinates } from '../redux'
import { GamePhases } from '../redux/types/game.types'

interface AppProps {
    phase: keyof typeof GamePhases
    dimensions: BoardDimensions
    board: Array<Array<number>>
    playerCoordinates: XYCoordinate
    updatePlayerCoordinates: (coordinates: XYCoordinate) => void
}

// static propTypes = {
//     dimensions: PropTypes.shape({
//         width: PropTypes.number,
//         height: PropTypes.number,
//     }).isRequired,
//     board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
//         .isRequired,
//     playerCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
//     updatePlayerCoordinates: PropTypes.func.isRequired,
// }

class App extends Component<AppProps> {
    componentDidUpdate(): void {
        // Determines whether or not to add a keyboard event listener to the
        // window.
        if (this.props.phase === GamePhases['phase:play']) {
            window.addEventListener('keypress', this.listen)
        } else {
            window.removeEventListener('keypress', this.listen)
        }
    }

    /**
     * Listens to keyboard events.
     *
     * @param {KeyboardEvent} event - DOM KeyboardEvent object
     */
    listen = (event: KeyboardEvent): void => {
        const [x, y] = this.props.playerCoordinates

        switch (event.key) {
            case 'w':
            case 'ArrowUp':
                this.movePlayer([x, y - 1])
                break

            case 's':
            case 'ArrowDown':
                this.movePlayer([x, y + 1])
                break

            case 'a':
            case 'ArrowLeft':
                this.movePlayer([x - 1, y])
                break

            case 'd':
            case 'ArrowRight':
                this.movePlayer([x + 1, y])
                break
        }
    }

    /**
     * Checks whether or not the new coordinates for the player are within the
     * bounds of the game board. If the player's new coordinates are within the
     * bounds, the function proceeds to dispatch the new coordinates to the
     * Redux store.
     *
     * @param {XYCoordinate} newCoordinates - New player coordinates
     *
     * @returns {void}
     */
    movePlayer = (newCoordinates: XYCoordinate): void => {
        const { dimensions, updatePlayerCoordinates } = this.props
        const { width, height } = dimensions
        const [x, y] = newCoordinates

        const isWithinBounds = x >= 0 && x < width && y >= 0 && y < height

        if (isWithinBounds) updatePlayerCoordinates(newCoordinates)
    }

    render(): JSX.Element {
        const { phase } = this.props

        return (
            <div>
                {phase === GamePhases['phase:start'] && <BoardSizePrompt />}
                {phase === GamePhases['phase:play'] && <Board />}
                {phase === GamePhases['phase:end'] && <GameOverPrompt />}
            </div>
        )
    }
}

type MapStateToPropsReturn = {
    phase: keyof typeof GamePhases
    board: Array<Array<number>>
    dimensions: BoardDimensions
    playerCoordinates: XYCoordinate
}
const mapStateToProps = ({
    phase,
    board,
    dimensions,
    playerCoordinates,
}): MapStateToPropsReturn => ({
    phase,
    board,
    dimensions,
    playerCoordinates,
})

type MapDispatchToPropsReturn = {
    updatePlayerCoordinates: (coordinates: XYCoordinate) => void
}
const mapDispatchToProps = (dispatch): MapDispatchToPropsReturn => ({
    updatePlayerCoordinates: (coordinates: XYCoordinate): void => {
        dispatch(updatePlayerCoordinates(coordinates))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
