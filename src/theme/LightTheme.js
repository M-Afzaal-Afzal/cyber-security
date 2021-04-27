import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a lightTheme instance.
const lightTheme = createMuiTheme({
  // here we are using palette to define default colors
  palette: {
    primary: {
      main: '#0099f7',
    },
    gray: {
      main: '#d1d8e1',
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
    default: {
      default: '#fff',
    },
  },

//   Here we are using typography to specify default typography

  typography: {
    h1: {
      fontSize: '3.75rem', //60 px,
      fontWeight: 'bold',
      color: '#303030',
      lineHeight: '1.3',
      letterSpacing: '1px'
    },
    h4: {
      fontSize: '1.5rem',
      color: '#303030',
      fontWeight: 'bold',
      letterSpacing: '1px'
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
      letterSpacing: '1px',
      color: '#303030',
    },
    body1: {
      color: '#303030'
    },
    body2: {
      fontSize: '16px',
      color: '#0099f7'
    }
  },

});

export default lightTheme;
