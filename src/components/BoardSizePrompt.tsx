import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateBoardDimensions } from '../redux'
import { VALID_BOARD_DIMENSIONS } from '../consts'

const BoardSizePrompt = (props): JSX.Element => {
    const {
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        updateBoardDimensions,
    } = props

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    const areValidDimensions = (): boolean => {
        const { width, height } = dimensions
        const isValidWidth = width >= minWidth && width <= maxWidth
        const isValidHeight = height >= minHeight && height <= maxHeight
        return isValidWidth && isValidHeight
    }

    const handleChange = (event): void => {
        const { name, value } = event.target
        setDimensions({ ...dimensions, [name]: Number(value) })
    }

    const handleSubmit = (event): void => {
        if (areValidDimensions()) updateBoardDimensions(dimensions)
    }

    return (
        <div>
            <p>{`Please enter a width between ${minWidth} and ${maxWidth}.`}</p>
            <p>{`Please enter a height between ${minHeight} and ${maxHeight}.`}</p>

            <label htmlFor="width">Width</label>
            <input
                name="width"
                type="number"
                min={minWidth}
                max={maxWidth}
                onChange={handleChange}
                required
            />

            <label htmlFor="height">Height</label>
            <input
                name="height"
                type="number"
                min={minHeight}
                max={maxHeight}
                onChange={handleChange}
                required
            />

            <button type="submit" onClick={handleSubmit}>
                Play
            </button>
        </div>
    )
}

BoardSizePrompt.defaultProps = {
    ...VALID_BOARD_DIMENSIONS,
}

BoardSizePrompt.propTypes = {
    minWidth: PropTypes.number.isRequired,
    maxWidth: PropTypes.number.isRequired,
    minHeight: PropTypes.number.isRequired,
    maxHeight: PropTypes.number.isRequired,
    updateBoardDimensions: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    updateBoardDimensions: (dimensions): void =>
        dispatch(updateBoardDimensions(dimensions)),
})

export default connect(null, mapDispatchToProps)(BoardSizePrompt)
