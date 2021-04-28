import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

const theme2 = createMuiTheme();

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
            main: '#7e7e7e',
        },
        error: {
            main: red.A400,
        },
        default: {
            default: '#fff',
        },
    },
    typography: {
        h1: {
            fontSize: '3.75rem', //60 px,
            fontWeight: 'bold',
            color: '#fff',
            lineHeight: '1.3',
            letterSpacing: '1px',
            [theme2.breakpoints.down('lg')]: {
                fontSize: '3.5rem',
            },
            [theme2.breakpoints.down('md')]: {
                fontSize: '3.3rem',
            },
            [theme2.breakpoints.down('sm')]: {
                fontSize: '3.2rem',
            },
            [theme2.breakpoints.down('sm')]: {
                fontSize: '3.1rem',
            },
        },
        h4: {
            fontSize: '1.5rem',
            color: 'white',
            fontWeight: 'bold',
            letterSpacing: '1px',

        },
        h5: {
            fontSize: '1.5rem',
            color: 'white',
            fontWeight: 'normal',
            letterSpacing: '1px'
        },
        h6: {
            fontSize: 18,
            fontWeight: 'bold',
            letterSpacing: '1px'
        },
        body1: {
            color: '#fff'
        },
        body2: {
            fontSize: '16px'
        }
    }
});

export default DarkTheme;
