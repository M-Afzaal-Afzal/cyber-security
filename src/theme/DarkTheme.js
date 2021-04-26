import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a lightTheme instance.
const DarkTheme = createMuiTheme({
    palette: {
        // We use these pallets for dark theme
        type: 'dark',
        primary: {
            main: '#0099f7',
        },
        gray: {
            main: '#65666e',
        },
        darkGray: {
            main: '#2b2d2e',
        },
        lightGray: {
            main: '#f2f2f2',
        },
        error: {
            main: red.A400,
        },
        white: {
            default: '#fff',
        },
    },
    typography: {
        h1: {
            fontSize: '3.75rem', //60 px,
            fontWeight: 'bold',
            color: '#fff',
            lineHeight: '1.3',
            letterSpacing: '1px'
        },
        h4: {
          fontSize: '1.5rem',
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: '1px'
        },
        body1: {
            color: '#fff'
        }
    }
});

export default DarkTheme;
