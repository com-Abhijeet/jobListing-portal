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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
