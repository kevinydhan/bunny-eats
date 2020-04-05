import React, { Component } from 'react'

import Board from './components/Board'
import BoardSizePrompt from './components/BoardSizePrompt'
import GameOverPrompt from './components/GameOverPrompt'
import { GAME_STATES } from './consts'

class App extends Component {
    state = {
        currentGameState: 'state:start',
        boardDimensions: { width: 5, height: 5 },
    }

    totalSteps = 0

    updateBoardDimensions = (dimensions) => {
        this.setState({
            boardDimensions: { ...dimensions },
            currentGameState: 'state:play',
        })
    }

    incrementTotalSteps = () => {
        this.totalSteps += 1
    }

    endGame = () => {
        this.setState({ currentGameState: 'state:end' })
    }

    retryLevel = () => {
        this.setState({ currentGameState: 'state:play' })
    }

    resetGame = () => {
        this.setState({ currentGameState: 'state:start' })
    }

    render() {
        const {
            state,
            updateBoardDimensions,
            incrementTotalSteps,
            endGame,
            totalSteps,
            retryLevel,
            resetGame,
        } = this
        const { currentGameState, boardDimensions } = state

        return (
            <>
                {currentGameState === GAME_STATES[0] && (
                    <BoardSizePrompt
                        updateBoardDimensions={updateBoardDimensions}
                    />
                )}
                {currentGameState === 'state:play' && (
                    <Board
                        boardDimensions={boardDimensions}
                        incrementTotalSteps={incrementTotalSteps}
                        endGame={endGame}
                    />
                )}
                {currentGameState === 'state:end' && (
                    <GameOverPrompt
                        totalSteps={totalSteps}
                        retryLevel={retryLevel}
                        resetGame={resetGame}
                    />
                )}
            </>
        )
    }
}

export default App

