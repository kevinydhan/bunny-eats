import styled from 'styled-components'

export default styled('button')<{ color: string }>`
    background: ${(props): string => {
        const { colors } = props.theme
        return colors[props.color] ?? 'darkgrey'
    }};

    border: 0;
    border-radius: 6px;
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 1em;
    padding: 15px 18px 15px 20px;
    text-shadow: 0 0 rgba(0, 0, 0, 0);
    transform: scale(1);
    transition: all 250ms cubic-bezier(0.1, 0, 0, 1);

    &:hover,
    &:active {
        box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            0 4px 8px rgba(0, 0, 0, 0.2);
        text-shadow: 0 -1px rgba(0, 0, 0, 0.1);
        transform: scale(1.06);
    }
`
