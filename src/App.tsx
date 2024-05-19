import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { PageWrapper, QrGenerator } from 'src/components';
import { useListen } from './assets/_firebase/helpers';
import IncidentReport from './forms/IncidentReport';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './theme';
import { LocalizationProvider } from '@mui/x-date-pickers';

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
            <Route
              element={
                <PageWrapper title='Scan student QR'>
                  tester
                  <QrGenerator name='test' uniqueId='test' />
                  <IncidentReport />
                </PageWrapper>
              }
              path='/'
            />
          </Routes>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
