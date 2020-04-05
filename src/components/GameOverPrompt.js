import React from 'react'
import PropTypes from 'prop-types'

const GameOverPrompt = (props) => {
    const { totalSteps, retryLevel } = props
    return (
        <div>
            <p>Game Over! You took {totalSteps} total steps.</p>
            <button onClick={retryLevel}>Retry Level</button>
            <button>Reset</button>
        </div>
    )
}

GameOverPrompt.propTypes = {
    totalSteps: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
    ]),
    retryLevel: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
}

export default GameOverPrompt
