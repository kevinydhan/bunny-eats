// React modules
import React from 'react'
import PropTypes from 'prop-types'
import BoardRow from '../BoardRow/BoardRow'

// Styled-components modules
import { Card } from '../../styles'

// Redux modules
import { connect } from 'react-redux'

const Board = (props): JSX.Element => {
    const { board } = props
    return (
        <Card flexDirection="column">
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
