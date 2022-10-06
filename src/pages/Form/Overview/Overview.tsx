import { useCallback } from 'react';

import { Box, Button } from '@mui/material';
import { useFormik } from 'formik';

import { CustomTextField } from 'pages/Form/components/CustomTextField/CustomTextField';

interface FormTypes {
  title: string;
  category: string;
  asset: string;
}

export function OverviewForm() {
  const handleSubmit = useCallback(() => {

  }, []);

  const { values, handleChange } = useFormik<FormTypes>({
    initialValues: {
      title: '',
      asset: '',
      category: '',
    },
    onSubmit: handleSubmit,
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
      <Button onClick={handleSubmit}>Save</Button>
    </Box>
  );
}

