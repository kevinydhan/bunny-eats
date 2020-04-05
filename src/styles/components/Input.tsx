import styled from 'styled-components'

export default styled('input')`
    -moz-appearance: textfield;
    border: 1px solid ${(props): string => props.theme.colors.lightgrey};
    border-radius: 6px;
    font-size: 18px;
    height: 48px;
    text-align: center;
    width: 48px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
