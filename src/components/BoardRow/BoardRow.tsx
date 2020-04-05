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
                const children: JSX.Element[] = []

                switch (cell) {
                    case EntityMap.player:
                        children.push(
                            <Image key='player' src="./images/player.png" />
                        )
                        break

                    case EntityMap.item:
                        children.push(
                            <Image key='item' src="./images/item.png" />
                        )
                        break
                }

                return <Cell key={`cell-${i}`} children={children} />
            })}
        </CellRow>
    )
}

BoardRow.propTypes = {
    row: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default BoardRow
