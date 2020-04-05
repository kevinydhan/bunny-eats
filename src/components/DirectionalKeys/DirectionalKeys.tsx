// React modules
import React from 'react'
import PropTypes from 'prop-types'
import { Root, Keycap } from './DirectionalKeys.styled'

interface DirectionalKeys {
    keys: [string, string, string, string]
}

const DirectionalKeys = (props: DirectionalKeys): JSX.Element => {
    const { keys } = props

    return (
        <Root>
            {keys.map((key, i) => (
                <Keycap key={`keyboard-${key}-${i}`}>{key}</Keycap>
            ))}
        </Root>
    )
}

DirectionalKeys.defaultProps = { keys: ['↑', '←', '↓', '→'] }
DirectionalKeys.propTypes = { keys: PropTypes.array }

export default DirectionalKeys
