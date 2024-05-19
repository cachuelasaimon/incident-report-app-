import { Paper, Stack } from '@mui/material';
import { FC } from 'react';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';

const Staff: FC = () => {
  const formContext = useForm({
    defaultValues: {
      createdAt: new Date(),
      modifiedAt: new Date(),
      modifiedBy: 'Logged in user',
      schoolYear: '2022-2023',
    },
  });

  console.log({ values: formContext.watch() });

  return (
    <FormContainer formContext={formContext}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>
          <TextFieldElement
            name='employeeNumber'
            label='Employee Number'
            fullWidth
          />
          <TextFieldElement name='name' label='Name' fullWidth />
          <TextFieldElement name='email' label='Email' type='email' fullWidth />
          <TextFieldElement name='phone' label='Phone' fullWidth />
          <SelectElement
            name='position'
            label='Position'
            options={[
              { id: 'teacher', label: 'Teacher' },
              { id: 'generalStaff', label: 'General Staff' },
            ]}
          />
        </Stack>
      </Paper>
    </FormContainer>
  );
};

export default Staff;
