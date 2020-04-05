// React modules
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

// Styled-components modules
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './styles'

// Redux modules
import { Provider } from 'react-redux'
import { store } from './redux'

render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('app')
)
