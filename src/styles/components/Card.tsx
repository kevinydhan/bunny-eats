import styled, {
    StyledComponent,
    DefaultTheme,
    ThemedStyledProps,
} from 'styled-components'

type CardStyledComponentProps = {
    alignItems?: string
    justifyContent?: string
    flexDirection?: string
}

type CardStyledComponent = StyledComponent<
    'div',
    DefaultTheme,
    CardStyledComponentProps,
    never
>

type CardStyledComponentThemeProps = ThemedStyledProps<
    CardStyledComponentProps,
    DefaultTheme
>

const Card: CardStyledComponent = styled('div')`
    align-items: ${(props: CardStyledComponentThemeProps): string => {
        return props.alignItems ?? 'flex-start'
    }};
    background: #fff;
    border-radius: 6px;
    box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: ${(props): string => props.flexDirection ?? 'flex-start'};
    justify-content: ${(props): string => props.justifyContent ?? 'flex-start'};
    padding: 48px;
`

export default Card
