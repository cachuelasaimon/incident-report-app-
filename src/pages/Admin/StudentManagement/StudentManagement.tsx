import { FC } from 'react';
import { PageWrapper } from 'src/components';
import { StudentForm } from 'src/forms';

const StudentManagement: FC = () => {
  return (
    <PageWrapper title='Student Management'>
      <StudentForm />
    </PageWrapper>
  );
};

export default StudentManagement;
