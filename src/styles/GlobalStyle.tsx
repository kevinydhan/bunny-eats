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

    font-family: 'Karla', sans-serif;
    scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: #333;
}

p,
a {
    color: #333;
}

a {
    text-decoration: none;
}

#app {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 300vh;
    position: relative;
    width: 100vw;
}
`
