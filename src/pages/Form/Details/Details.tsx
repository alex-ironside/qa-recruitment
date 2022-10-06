import { useMemo } from 'react';

import type { SelectChangeEvent } from '@mui/material';
import { Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';

import { LevelsSelector } from 'components/LevelsSelector/LevelsSelector';
import { LEVEL_FIELDS } from 'consts';
import { CustomDatePicker } from 'pages/Form/components/CustomDatePicker/CustomDatePicker';
import { CustomTextField } from 'pages/Form/components/CustomTextField/CustomTextField';

interface FormTypes {
  comment: string;
  risk: string;
  quantity: number;
  deadline?: Date;
  impact: number;
  execProbability: number;
  severity: number;
}

export function DetailsForm() {
  const { mutate } = useMutation([''], (values: FormTypes) => {
    console.log(values);
    return new Promise(() => {});
  });

  const submit = (values: FormTypes) => {
    mutate(values);
  };

  const {
    values, handleChange, setFieldValue, handleSubmit,
  } = useFormik<FormTypes>({
    initialValues: {
      impact: 0,
      execProbability: 0,
      severity: 0,
      comment: '',
      quantity: 0,
      risk: '',
    },
    onSubmit: submit,
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
      <CustomTextField
        name="comment"
        label="comment"
        onChange={handleChange}
        value={values.comment}
        type="text"
      />
      <CustomTextField
        name="risk"
        label="risk"
        onChange={handleChange}
        value={values.risk}
        type="text"
      />
      <CustomTextField
        name="quantity"
        label="quantity"
        onChange={handleChange}
        value={values.quantity}
        type="number"
      />
      <CustomDatePicker
        onChange={handleChange}
        label="deadline"
        value={values.deadline}
      />
      <LevelsSelector items={levelSectionItems} />
      <Button
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Save
      </Button>
    </form>
  );
}

