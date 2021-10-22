import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0052FF",
    },
    secondary: {
      main: "#FFA74F",
    },
  },
  typography: {
    fontFamily: [
      'Graphik',
      'Open Sans',
    ].join(','),
    subtitle1: {
      fontSize: '5rem',
      fontFamily: 'Graphik',
    },
    h6: {
      fontSize: '3.5rem',
      fontFamily: 'Graphik',
      fontStyle: 'normal',
    },
    subtitle2: {
      fontSize: '2.5rem',
      fontFamily: 'Graphik',
    },
    h5: {
      fontSize: '2.5rem',
      fontFamily: 'Graphik',
    },
  },
});
