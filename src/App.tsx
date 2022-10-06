import { createTheme, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Router } from 'pages/Router/Router';

export function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
