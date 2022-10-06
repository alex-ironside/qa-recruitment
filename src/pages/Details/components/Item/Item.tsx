import type { PropsWithChildren } from 'react';

import { Box, Typography } from '@mui/material';

interface Props extends PropsWithChildren {
  title: string;
}
export function DetailsItem({ title, children }: Props) {
  return (
    <Box sx={{
      border: '1px solid black', borderRadius: 2, width: '100%', textAlign: 'center', mt: 1,
    }}
    >
      <Typography
        component="h6"
        variant="h6"
      >
        {title}
      </Typography>
      <Typography>
        {children}
      </Typography>
    </Box>
  );
}
