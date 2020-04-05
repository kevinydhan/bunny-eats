import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            blue: string
            red: string
            green: string
            grey: string
            darkgrey: string
            lightgrey: string
        }

        fonts: {
            main: string
            buttons: string
        }
    }
}
