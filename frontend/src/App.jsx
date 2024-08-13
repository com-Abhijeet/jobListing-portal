import './App.css';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import JobSearch from './components/pages/JobSearch';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import OtpInput from './components/auth/OtpInput';
import Reset from './components/auth/Reset';
import { createContext, useState } from 'react';
import Recovered from './components/auth/Recovered';

export const RecoveryContext = createContext();
function App() {
  const [page, setPage] = useState('login');
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();

  function NavigateComponents() {
    if (page === 'login') return <Login />;
    if (page === 'otp') return <OtpInput />;
    if (page === 'reset') return <Reset />;

    return <Recovered />;
  }

  return (
    <>
      <RecoveryContext.Provider
        value={{ page, setPage, otp, setOTP, setEmail, email }}
      >
        <Router>
          <div className="font-inter">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/jobsearch" element={<JobSearch />} />
              <Route path="/forgotpass" element={<ForgotPassword />} />
              <Route path="/otpinput" element={<OtpInput />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/recovered" element={<Recovered />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </RecoveryContext.Provider>
    </>
  );
}

export default App;
