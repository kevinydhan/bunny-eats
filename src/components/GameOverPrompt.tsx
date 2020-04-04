import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { retryLevel, restartWithDifferentBoardDimensions } from '../redux'

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

const mapStateToProps = ({ totalSteps }) => ({ totalSteps })

const mapDispatchToProps = (dispatch) => ({
    retryLevel: (): void => dispatch(retryLevel()),

    restartWithDifferentBoardDimensions: (): void => {
        dispatch(restartWithDifferentBoardDimensions())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameOverPrompt)
