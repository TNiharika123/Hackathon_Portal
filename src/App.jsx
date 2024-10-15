import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAVBAR from "./components/Navbar/App"; // Adjust the import path as needed
import HomePage from "./components/MainPage/HomePage"; // Adjust the import path as needed


const App = () => {
  return (
    <Router>
      <NAVBAR />
      <Routes>
        {/* <Route path="/discord" element={<Discord />} /> */}
        {/* <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/devpost" element={<Devpost />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/contact" element={<HomePage />} /> */}
        {/* <Route path="/links" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} /> */}
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
