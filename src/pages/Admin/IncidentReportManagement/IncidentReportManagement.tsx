import { FC } from 'react';
import { PageWrapper } from 'src/components';
import { IncidentReportForm } from 'src/forms';

const IncidentReportManagement: FC = () => {
  return (
    <PageWrapper title='Incident Report Management'>
      <IncidentReportForm />
    </PageWrapper>
  );
};

export default IncidentReportManagement;
