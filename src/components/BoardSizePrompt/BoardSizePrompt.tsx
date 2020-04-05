// React modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Redux modules
import { connect } from 'react-redux'
import { updateBoardDimensions } from '../../redux'

// Styled-components modules
import { Card, Input, Button } from '../../styles'
import { Heading, Paragraph, InputRow, Label } from './BoardSizePrompt.styled'

// Variables
import { VALID_BOARD_DIMENSIONS } from '../../consts'

/**
 *
 * @param props
 */
const BoardSizePrompt = (props): JSX.Element => {
    const {
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        updateBoardDimensions,
    } = props

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    /**
     * Validates the input width and height to the specified minimums and
     * maximums.
     */
    const areValidDimensions = (): boolean => {
        const { width, height } = dimensions
        const isValidWidth = width >= minWidth && width <= maxWidth
        const isValidHeight = height >= minHeight && height <= maxHeight
        return isValidWidth && isValidHeight
    }

    /**
     * Handles the input change for:
     * - `<input name="width">`
     * - `<input name="height">`
     *
     * @param event
     */
    const handleChange = (event): void => {
        const { name, value } = event.target
        setDimensions({ ...dimensions, [name]: Number(value) })
    }

    /**
     * Handles the `onClick` event for the `"Play"` button.
     */
    const handleSubmit = (): void => {
        if (areValidDimensions()) updateBoardDimensions(dimensions)
    }

    return (
        <Card
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Heading>Bunny Eats</Heading>

            <Paragraph>
                Please enter a width between {minWidth} and {maxWidth}.
            </Paragraph>
            <Paragraph>
                Please enter a height between {minHeight} and {maxHeight}.
            </Paragraph>

            <InputRow>
                <div>
                    <Label htmlFor="width">Width</Label>
                    <Input
                        name="width"
                        type="number"
                        min={minWidth}
                        max={maxWidth}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="height">Height</Label>
                    <Input
                        name="height"
                        type="number"
                        min={minHeight}
                        max={maxHeight}
                        onChange={handleChange}
                        required
                    />
                </div>
            </InputRow>

            <Button type="submit" color="blue" onClick={handleSubmit}>
                Play
            </Button>
        </Card>
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

type MapDispatchToPropsReturn = {
    updateBoardDimensions: (dimensions: BoardDimensions) => void
}
const mapDispatchToProps = (dispatch): MapDispatchToPropsReturn => ({
    updateBoardDimensions: (dimensions): void =>
        dispatch(updateBoardDimensions(dimensions)),
})

export default connect(null, mapDispatchToProps)(BoardSizePrompt)
