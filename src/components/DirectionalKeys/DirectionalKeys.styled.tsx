import styled from 'styled-components'

export const Root = styled('div')`
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: calc(50px * 2);
    place-items: center;
    width: calc(52px * 3);
`

export const Keycap = styled('span')`
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    border-top: 1px solid #ccc;
    box-shadow: 0 3px 0 2px #ccc;
    color: #444;
    display: flex;
    font-family: sans-serif;
    font-size: 18px;
    height: 43px;
    justify-content: center;
    padding-bottom: 3px;
    position: relative;
    width: 46px;

    &:nth-child(1) {
        grid-column: 2;
        grid-row: 1;
    }

    :nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    :nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }

    :nth-child(4) {
        grid-column: 3;
        grid-row: 2;
    }
`
