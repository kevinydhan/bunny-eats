import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Board = (props): JSX.Element => {
    const { board } = props
    return (
        <main>
            {board.map((row, i) => {
                return (
                    <div key={`row-${i}`}>
                        {row.map((cell, i) => (
                            <span key={`cell-${i}`}>{cell}</span>
                        ))}
                    </div>
                )
            })}
        </main>
    )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
}

type MapStateToPropsReturn = { board: Array<Array<number>> }
const mapStateToProps = ({ board }): MapStateToPropsReturn => ({ board })

export default connect(mapStateToProps)(Board)
