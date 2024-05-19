import { Paper, Stack } from '@mui/material';
import { FC } from 'react';
import { FormContainer, TextFieldElement, useForm } from 'react-hook-form-mui';

const Student: FC = () => {
  const formContext = useForm();

  console.log({ values: formContext.watch() });

  return (
    <FormContainer formContext={formContext}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>
          <TextFieldElement
            name='studentNumber'
            label='Student Number'
            fullWidth
          />
          <TextFieldElement name='name' label='Name' fullWidth />
          <TextFieldElement name='email' label='Email' type='email' fullWidth />
          <TextFieldElement name='phone' label='Phone' fullWidth />
        </Stack>
      </Paper>
    </FormContainer>
  );
};

export default Student;
