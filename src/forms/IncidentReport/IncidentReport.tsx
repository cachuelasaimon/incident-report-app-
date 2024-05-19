import { Paper, Stack } from '@mui/material';
import { FC } from 'react';
import {
  AutocompleteElement,
  FormContainer,
  TextFieldElement,
  useForm,
} from 'react-hook-form-mui';
import { DatePickerElement } from 'src/components';

const IncidentReport: FC = () => {
  const formContext = useForm();
  // TODO: Fetch Staff
  // TODO: Fetch Students

  console.log({ values: formContext.watch() });

  return (
    <FormContainer formContext={formContext}>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>
          <DatePickerElement
            name='incidentDate'
            label='Incident Date'
            inputProps={{ fullWidth: true }}
          />
          <AutocompleteElement
            name='listOfStudents'
            label='List of Students'
            multiple
            options={[
              { id: 'student 1', label: 'Student 1' },
              { id: 'student 2', label: 'Student 2' },
              { id: 'student 3', label: 'Student 3' },
              { id: 'student 4', label: 'Student 4' },
            ]}
          />
          <AutocompleteElement
            name='reporter'
            label='Reporter'
            options={[
              { id: 'staff 1', label: 'Staff 1' },
              { id: 'staff 2', label: 'Staff 2' },
              { id: 'staff 3', label: 'Staff 3' },
              { id: 'staff 4', label: 'Staff 4' },
            ]}
          />
          <TextFieldElement name='location' label='Location' fullWidth />
          <TextFieldElement
            name='description'
            label='Description'
            multiline
            minRows={3}
            fullWidth
          />
        </Stack>
      </Paper>
    </FormContainer>
  );
};

export default IncidentReport;
