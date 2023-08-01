import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginPage from './components/pages/Login';
import OTPVerificationPage from './components/pages/OTPVerification';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/login/otp-verification" element= {<OTPVerificationPage />} />
        <Route exact path="/dashboard" element = {<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
