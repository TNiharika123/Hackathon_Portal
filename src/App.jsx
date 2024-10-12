import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAVBAR from "./components/Navbar/App"; // Adjust the import path as needed
import HomePage from "./components/MainPage/HomePage"; // Adjust the import path as needed
// import Discord from "./Routes/Discord"; // Adjust the import path as needed
// import Twitter from "./Routes/Twitter"; // Adjust the import path as needed
// import Linkedin from "./Routes/LinkedIn"; // Adjust the import path as needed
// import Instagram from "./Routes/Instagram"; // Adjust the import path as needed
// import Devpost from "./Routes/Devpost"; // Adjust the import path as needed

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
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
