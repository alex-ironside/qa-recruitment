import { Container, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';

export function CustomOutlet() {
  return (
    <Container>
      <Paper sx={{ height: '95vh' }}>
        <Navigation />
        <Outlet />
      </Paper>
    </Container>
  );
}
