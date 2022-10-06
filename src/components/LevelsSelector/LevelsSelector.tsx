import { memo } from 'react';

import type { SelectChangeEvent } from '@mui/material';
import {
  FormControl,
  Box, InputLabel, MenuItem, Select, Stack,
} from '@mui/material';

import { Level } from 'enums';

interface Props {
  items: Array<{
    name?: string; // TODO: HLC-330
    label: string;
    value: number;
    onChange: (event: SelectChangeEvent<number>) => void;
  }>;
}
export const LevelsSelector = memo(({ items }: Props) => (
  <Box mt={2}>
    <Stack
      direction="row"
      justifyContent="space-between"
    >
      {items.map(({
        name, label, value, onChange,
      }) => (
        <FormControl
          key={label}
        >
          <InputLabel id="select-label">{label}</InputLabel>
          <Select
            name={name}
            value={value}
            onChange={onChange}
            label={label}
          >
            {Object.entries(Level)
              .filter(([key]) => Number.isNaN(Number(key)))
              .map(([key, levelValue]) => (
                <MenuItem
                  key={levelValue}
                  value={levelValue}
                >
                  {key}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      ))}
    </Stack>
  </Box>
));
