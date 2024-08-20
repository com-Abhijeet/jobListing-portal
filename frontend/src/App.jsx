<<<<<<< HEAD
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
import Profile from './components/pages/Profile';
import Companies from './components/admin/Companies';
import CreateCompany from './components/admin/CreateCompany';
import CompanySetup from './components/admin/CompanySetup';
=======
import "./App.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import JobSearch from "./components/pages/JobSearch";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Jobapp from "./components/pages/Jobapp";
import Job from "./components/pages/Jobs";

import Jobs from "./components/pages/Jobs";
import Profile from "./components/pages/Profile";
import JobDescription from "./components/pages/JobDescription";
>>>>>>> 5b4fa0fc773d674e8f13faa49583fd32ce582789

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
<<<<<<< HEAD
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
            </Routes>
            <Footer />
          </div>
        </Router>
      </RecoveryContext.Provider>
=======
      <Router>
        <div className="font-inter">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Jobapp />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/description/:id" element={<JobDescription />} />

            {/* <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />*/}
            <Route path="/jobsearch" element={<JobSearch />} />
          </Routes>
          <Footer />
        </div>
      </Router>
>>>>>>> 5b4fa0fc773d674e8f13faa49583fd32ce582789
    </>
  );
}

export default App;
