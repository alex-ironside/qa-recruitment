import type { ChangeEvent } from 'react';

import { Box, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';

interface Props {
  onChange: (value: ChangeEvent<any> | null, keyboardInputValue?: string | undefined) => void;
  value: any;
  label: string;
}
export function CustomDatePicker({ onChange, value, label }: Props) {
  return (
    <Box mt={2}>
      <DesktopDatePicker
        onChange={onChange}
        label={label}
        value={value}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
          />
        )}
      />
    </Box>
  );
}
