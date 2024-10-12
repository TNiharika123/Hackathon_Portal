import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';

export default class NAVBAR extends React.Component {
  state = {
    color: "#121930"
  };

  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({ color: "rgba(50, 13, 136)" });
    } else {
      this.setState({ color: "#121930" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <nav className="nav_bar" style={{ backgroundColor: this.state.color }}>
          <ul>
            <li>
              <Link to="/">
                <span className="links">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="links">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="links">Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/links">
                <span className="links">Links</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
