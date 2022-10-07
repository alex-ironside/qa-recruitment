import { Container, Paper } from '@mui/material';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';

export function CustomOutlet() {
  return (
    <Container>
      <Paper sx={{ height: '95vh' }}>
        <Navigation />
        <Outlet />
      </Paper>
      <ReactQueryDevtools initialIsOpen={false} />
    </Container>
  );
}
