// React modules
import React from 'react'
import PropTypes from 'prop-types'

// Redux modules
import { connect } from 'react-redux'
import { retryLevel, restartWithDifferentBoardDimensions } from '../redux'

/**
 * Renders a card that prompts the user whether or not they want to retry the
 * current level or restart the game with new board dimensions.
 *
 * @param {number} props.totalSteps - Total number of steps taken by the user
 * during the most recent game
 * @param {Function} props.retryLevel - Redux dispatch method that triggers a
 * reinitialization of the game with the same board dimensions
 * @param {Function} params.restartWithDifferentBoardDimensions - Redux
 * dispatch method that triggers the game to prompt the user for new board
 * dimensions
 *
 * @returns {JSX.Element}
 */
const GameOverPrompt = (props): JSX.Element => {
    const {
        totalSteps,
        retryLevel,
        restartWithDifferentBoardDimensions,
    } = props

    return (
        <div>
            <p>Game over! You took {totalSteps} steps.</p>
            <button onClick={retryLevel}>Retry Level</button>
            <button onClick={restartWithDifferentBoardDimensions}>
                Change Board Dimensions
            </button>
        </div>
    )
}

GameOverPrompt.propTypes = {
    totalSteps: PropTypes.number.isRequired,
    retryLevel: PropTypes.func.isRequired,
    restartWithDifferentBoardDimensions: PropTypes.func.isRequired,
}

type MapStateToPropsReturn = { totalSteps: number }
const mapStateToProps = ({ totalSteps }): MapStateToPropsReturn => ({
    totalSteps,
})

type MapDispatchToPropsReturn = {
    retryLevel: () => void
    restartWithDifferentBoardDimensions: () => void
}
const mapDispatchToProps = (dispatch): MapDispatchToPropsReturn => ({
    retryLevel: (): void => dispatch(retryLevel()),
    restartWithDifferentBoardDimensions: (): void => {
        dispatch(restartWithDifferentBoardDimensions())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOverPrompt)
