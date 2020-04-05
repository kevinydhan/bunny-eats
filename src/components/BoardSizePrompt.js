import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VALID_BOARD_DIMENSIONS } from '../consts'

/**
 * Renders a prompt containing two inputs
 */
class BoardSizePrompt extends Component {
    state = {
        width: 0,
        height: 0,
    }

    updateDimension = ({ target }) => {
        this.setState({ [target.name]: Number(target.value) })
    }

    /**
     * Validates the width and height values submitted by the user.
     *
     * @returns {boolean} - Boolean indicating whether all validations passed  or not. If `true`, all validations regarding the dimensions have passed.
     */
    validateDimensions = () => {
        const { state, props } = this
        const { validWidths, validHeights } = props

        // Validates width
        const isValidWidth =
            state.width >= validWidths.min && state.width <= validWidths.max

        // Validates height
        const isValidHeight =
            state.height >= validHeights.min && state.height <= validHeights.max

        return isValidWidth && isValidHeight
    }

    /**
     * Validates the board dimensions passed in by the user and updates the
     * values in the `App` component.
     */
    handleSubmit = () => {
        const { validateDimensions } = this
        const { width, height } = this.state

        if (validateDimensions()) {
            this.props.updateBoardDimensions({ width, height })
        }
    }

    render() {
        const { state, props, updateDimension, handleSubmit } = this
        const { validWidths, validHeights } = props

        return (
            <div>
                <p>{`Please enter a width between ${this.props.validWidths.min} and ${this.props.validWidths.max}.`}</p>
                <p>{`Please enter a height between ${this.props.validHeights.min} and ${this.props.validHeights.max}.`}</p>

                <label htmlFor="width">Width</label>
                <input
                    name="width"
                    type="number"
                    min={validWidths.min}
                    max={validWidths.max}
                    onChange={updateDimension}
                    required
                />

                <label htmlFor="height">Height</label>
                <input
                    name="height"
                    type="number"
                    min={validHeights.min}
                    max={validHeights.max}
                    onChange={updateDimension}
                    required
                ></input>

                <button onClick={handleSubmit}>Play</button>
            </div>
        )
    }
}

BoardSizePrompt.defaultProps = {
    validWidths: VALID_BOARD_DIMENSIONS.width,
    validHeights: VALID_BOARD_DIMENSIONS.height,
}

BoardSizePrompt.propTypes = {
    validWidths: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }),
    validHeights: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
    }),
    updateBoardDimensions: PropTypes.func.isRequired,
}

export default BoardSizePrompt
