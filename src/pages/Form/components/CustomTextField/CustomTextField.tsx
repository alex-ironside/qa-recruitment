import type { TextFieldProps } from '@mui/material';
import { Box, TextField } from '@mui/material';

export function CustomTextField({
  name, onChange, value, type, label,
}: TextFieldProps) {
  return (
    <Box
      width="100%"
      mt={2}
    >
      <TextField
        fullWidth
        label={label}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </Box>
  );
}
