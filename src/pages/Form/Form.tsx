import { useMemo } from 'react';

import type { SelectChangeEvent } from '@mui/material';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';

import { LevelsSelector } from 'components/LevelsSelector/LevelsSelector';
import { LEVEL_FIELDS } from 'consts';

interface FormTypes {
  title: string;
  impact: number;
  execProbability: number;
  severity: number;
}

export function CustomForm() {
  const handleSubmit = () => {

  };

  const { values, handleChange, setFieldValue } = useFormik<FormTypes>({
    initialValues: {
      title: '',
      impact: 0,
      execProbability: 0,
      severity: 0,
    },
    onSubmit: handleSubmit,
  });

  const levelSectionItems = useMemo(
    () => LEVEL_FIELDS.map((field) => ({
      label: field.label,
      value: values[field.stateEl],
      onChange: (e: SelectChangeEvent<number>) => setFieldValue(field.stateEl, e.target.value),
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setFieldValue, values.impact, values.execProbability, values.severity],
  );

  return (
    <form>
      <TextField
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <LevelsSelector items={levelSectionItems} />
    </form>
  );
}

