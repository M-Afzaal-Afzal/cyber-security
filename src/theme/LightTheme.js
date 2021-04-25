import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a lightTheme instance.
const lightTheme = createMuiTheme({
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
    background: {
      default: '#fff',
    },
  },
});

export default lightTheme;
