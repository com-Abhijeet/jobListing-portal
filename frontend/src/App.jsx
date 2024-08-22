import './App.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Jobs from './components/pages/Jobs';

import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import JobSearch from './components/pages/JobSearch';
import ForgotPassword from './components/auth/ForgotPassword';
import OtpInput from './components/auth/OtpInput';
import Reset from './components/auth/Reset';
import Recovered from './components/auth/Recovered';
import Profile from './components/pages/Profile';
import Companies from './components/admin/Companies';
import CreateCompany from './components/admin/CreateCompany';
import CompanySetup from './components/admin/CompanySetup';
import Jobapp from './components/pages/Jobapp';
import { createContext, useState } from 'react';
import JobDescription from './components/pages/JobDescription';
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';

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
              <Route path="/profile" element={<Profile />} />
              //admin part start
              <Route path="/admin/companies" element={<Companies />} />
              <Route
                path="/admin/companies/create"
                element={<CreateCompany />}
              />
              <Route path="/admin/companies/:id" element={<CompanySetup />} />

              <Route path="/joblisting" element={<Jobs />} />
              <Route path="/jobapp" element={<Jobapp />} />
              <Route path="/description/:id" element={<JobDescription />} />
              <Route path="/admin/jobs" element={<AdminJobs/>} />
              <Route path="/admin/jobs/create" element={<PostJob/>} />
              <Route path="/admin/jobs/applicants/:id" element={<Applicants/>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </RecoveryContext.Provider>
    </>
  );
}

export default App;
