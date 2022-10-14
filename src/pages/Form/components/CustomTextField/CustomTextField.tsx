import type { TextFieldProps } from '@mui/material';
import { Box, TextField } from '@mui/material';

interface Props {
  testId?: string;
}
export function CustomTextField({
  name, onChange, value, type, label, testId,
}: TextFieldProps & Props) {
  return (
    <Box
      width="100%"
      mt={2}
    >
      <TextField
        data-testId={testId}
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
