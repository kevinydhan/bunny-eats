import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html {
    box-sizing: border-box;
    font-size: 1.125rem;
    overflow-x: hidden;
}

html,
input {
    font-family: ${(props): string => props.theme.fonts.main}, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
    color: ${(props): string => props.theme.colors.darkgrey};
    letter-spacing: 2px;
    margin-right: -2px;
}

button {
    font-family: ${(props): string => props.theme.fonts.buttons}, sans-serif;
}

#app {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 36px;
    position: relative;
    width: 100vw;

    &::before {
        background-blend-mode: multiply;
        background-color: #eee;
        background-image: url('./images/background.jpg');
        background-position: center;
        background-size: cover;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -999;
    }
}
`
