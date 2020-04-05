// Styled-components modules
import { DefaultTheme } from 'styled-components'
import GlobalStyle from './GlobalStyle'

// Shared styled components
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'

const theme: DefaultTheme = {
    colors: {
        blue: '#0080ff',
        red: '#ff3149',
        green: '#00d074',
        grey: '#aaacaf',
        darkgrey: '#303336',
        lightgrey: '#aaacae',
    },
    fonts: {
        main: 'Rubik',
        buttons: 'Fredoka One',
    },
}

export { theme, GlobalStyle, Button, Card, Input }
