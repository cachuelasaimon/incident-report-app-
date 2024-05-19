import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { PageWrapper, QrGenerator } from 'src/components';
import { useListen } from './assets/_firebase/helpers';
import IncidentReport from './forms/IncidentReport';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {
  GenerateQr,
  IncidentReportManagement,
  StaffManagement,
  StudentManagement,
} from './pages';

const pages = [
  {
    path: '/admin/incident-report-management',
    Component: IncidentReportManagement,
  },
  {
    path: '/admin/student-management',
    Component: StudentManagement,
  },
  {
    path: '/admin/staff-management',
    Component: StaffManagement,
  },
  {
    path: '/student/generate-qr',
    Component: GenerateQr,
  },
];

function App() {
  const { docs, isLoading } = useListen({ collectionName: 'students' });
  console.log('firestore test', {
    docs,
    isLoading,
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Routes>
            {pages.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
