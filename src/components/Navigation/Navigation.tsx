import { useCallback } from 'react';

import {
  AppBar, Box, Button, Toolbar, Typography, Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const navigate = useNavigate();
  const goToDisplayDetails = useCallback(() => navigate('/'), [navigate]);
  const goToEditDetails = useCallback(() => navigate('/edit/overview'), [navigate]);
  const goToEditOverview = useCallback(() => navigate('/edit/details'), [navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              sx={{ color: 'white' }}
              onClick={goToDisplayDetails}
            >
              Details
            </Link>
          </Typography>
          <Button>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              sx={{ color: 'white' }}
              onClick={goToEditOverview}
            >
              Edit overview
            </Link>
          </Button>

          <Button sx={{ color: 'white' }}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link
              sx={{ color: 'white' }}
              onClick={goToEditDetails}
            >
              Edit details
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
