import styled from 'styled-components'

export const CellRow = styled('div')`
    display: flex;

    &:not(:last-child) {
        span {
            border-bottom: 0;
        }
    }
`

export const Cell = styled('span')`
    align-items: center;
    border: 1px dashed #ccc;
    display: flex;
    height: 65px;
    justify-content: center;
    width: 65px;

    &:not(:last-child) {
        border-right: 0;
    }
`

export const Image = styled('img')`
    display: inline-block;
    height: 60px;
    width: 60px;
`
