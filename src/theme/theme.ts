import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import cyan from '@material-ui/core/colors/cyan'
import teal from '@material-ui/core/colors/teal'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2E6EC1',
            light: '#FFFFFF',
            dark: '#2E6EC1',
        },
        warning: {
            main: '#F95252',
        },
        secondary: {
            main: '#FE6B8B',
            light: '#CCCCCC',
            '100': '#FFDFE1',
        },
        text: {
            primary: '#31353D',
        },
        background: {
            default: '#DCEBFF',
            paper: '#FFFFFF',
        },
    },
})

export const Colors = {
    red,
    blue,
    cyan,
    teal,
}
