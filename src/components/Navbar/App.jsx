import React from "react";
import "./styles.scss";
import HomePage from "../MainPage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

export default class NAVBAR extends React.Component {
  state = {
    color: "#121930",
    menuOpen: false,  // State for managing mobile menu toggle
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 800) {
      this.setState({ color: "rgba(50, 13, 136)" });
    } else {
      this.setState({ color: "#121930" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,  // Toggle the menu open/close
    }));
  };

  render() {
    return (
      <div>
        {/* Navigation Bar */}
        <nav className="nav_bar" style={{ backgroundColor: this.state.color }}>
          <div className="hamburger" onClick={this.toggleMenu}>
            {/* Hamburger Icon */}
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {/* Navbar Links */}
          <ul className={this.state.menuOpen ? "nav-links open" : "nav-links"}>
            <li>
              <Link to="/" className="links">Home</Link>
            </li>
            <li>
              <Link to="/discord" className="links">Discord</Link>
            </li>
            <li>
              <Link to="/linkedin" className="links">LinkedIn</Link>
            </li>
            <li>
              <Link to="/twitter" className="links">Twitter</Link>
            </li>
            <li>
              <Link to="/instagram" className="links">Instagram</Link>
            </li>
            <li>
              <Link to="/devpost" className="links">Devpost</Link>
            </li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/discord" element={<Discord />} />
          <Route path="/linkedin" element={<Linkedin />} />
          <Route path="/devpost" element={<Devpost />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}
