import { Box, Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';

import { REQUEST_URL } from 'consts';
import { CustomTextField } from 'pages/Form/components/CustomTextField/CustomTextField';
import type { IDetails } from 'pages/types';

type FormType = Pick<IDetails, 'title' | 'asset' | 'category'>;

export function OverviewForm() {
  const { mutate } = useMutation(
    ['edit/details'],
    (values: FormType) => axios.post(`${REQUEST_URL}/overview`, values),
  );

  const submit = (values: FormType) => {
    mutate(values);
  };

  const { values, handleChange, handleSubmit } = useFormik<FormType>({
    initialValues: {
      title: '',
      asset: '',
      category: '',
    },
    onSubmit: submit,
  });

  return (
    <Box>
      <CustomTextField
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <CustomTextField
        label="category"
        name="category"
        value={values.category}
        onChange={handleChange}
      />
      <CustomTextField
        label="asset"
        name="asset"
        value={values.asset}
        onChange={handleChange}
      />
      <Button onClick={() => handleSubmit()}>Save</Button>
    </Box>
  );
}

