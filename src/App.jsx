import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/Utility/ScrollToTop";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import TheWeatherman from "./components/Projects/TheWeatherman";
import WilpshireDental from "./components/Projects/WilpshireDental";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPageContainer />} />
          <Route path="/AboutMe" element={<AboutMeContainer />} />
          <Route
            path="/Projects/TheWeatherman"
            element={<TheWeathermanContainer />}
          />
          <Route
            path="/Projects/WilpshireDentalClinic"
            element={<WilpshireDentalContainer />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function LandingPageContainer() {
  const location = useLocation();

  return (
    <motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <LandingPage />
    </motion.div>
  );
}

function AboutMeContainer() {
  const location = useLocation();

  return (
    <motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <AboutMe />
    </motion.div>
  );
}

function TheWeathermanContainer() {
  const location = useLocation();

  return (
    <motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <TheWeatherman />
    </motion.div>
  );
}

function WilpshireDentalContainer() {
  const location = useLocation();

  return (
    <motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <WilpshireDental />
    </motion.div>
  );
}

export default App;
