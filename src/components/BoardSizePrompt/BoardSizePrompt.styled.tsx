import styled from 'styled-components'

export const Heading = styled('h1')`
    margin-bottom: 36px;
`

export const Paragraph = styled('p')`
    color: ${(props): string => props.theme.colors.grey};
    margin-bottom: 12px;

    &:last-of-type {
        margin-bottom: 76px;
    }
`

export const Label = styled('label')`
    letter-spacing: 2px;
    margin-right: 6px;
`

export const InputRow = styled('div')`
    align-items: center;
    display: flex;
    justify-content: space-around;
    margin-bottom: 48px;
    width: 100%;
`
