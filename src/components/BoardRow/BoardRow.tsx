// React modules
import React from 'react'
import PropTypes from 'prop-types'

//Styled-components modules
import { CellRow, Cell, Image } from './BoardRow.styled'

import { EntityMap } from '../../utils'

const BoardRow = (props): JSX.Element => {
    const { row } = props

    return (
        <CellRow>
            {row.map((cell, i) => {
                switch (cell) {
                    case EntityMap.player:
                        return (
                            <Cell key={`cell-${i}`}>
                                <Image src="./images/player.png" />
                            </Cell>
                        )
                    case EntityMap.item:
                        return (
                            <Cell key={`cell-${i}`}>
                                <Image src="./images/item.png" />
                            </Cell>
                        )
                    default:
                        return <Cell key={`cell-${i}`} />
                }
            })}
        </CellRow>
    )
}

BoardRow.propTypes = {
    row: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default BoardRow
