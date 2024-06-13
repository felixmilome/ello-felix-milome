import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5ACCCC', 
      light:'#CFFAFA',
      dark:'#28b8b8'
    },
  
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
});

export default theme;
