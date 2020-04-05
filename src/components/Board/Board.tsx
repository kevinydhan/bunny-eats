// React modules
import React from 'react'
import PropTypes from 'prop-types'
import BoardRow from '../BoardRow/BoardRow'
import DirectionalKeys from '../DirectionalKeys/DirectionalKeys'

// Styled-components modules
import { Card } from '../../styles'
import { Directions } from './Board.styled'

// Redux modules
import { connect } from 'react-redux'

const Board = (props): JSX.Element => {
    const { board } = props
    return (
        <Card flexDirection="column" alignItems="center">
            <Directions>
                Use
                <DirectionalKeys keys={['W', 'A', 'S', 'D']} />
                or
                <DirectionalKeys />
                to move
            </Directions>

            {board.map((row, i) => {
                return <BoardRow key={`row-${i}`} row={row} />
            })}
        </Card>
    )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

type MapStateToPropsReturn = { board: Array<Array<number>> }
const mapStateToProps = ({ board }): MapStateToPropsReturn => ({ board })

export default connect(mapStateToProps)(Board)
