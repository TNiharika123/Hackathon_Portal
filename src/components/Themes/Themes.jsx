// Themes.jsx (inside the Themes folder)

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { FirstPrize } from "../PrizeTracks/Prizes.jsx"; // Assuming FirstPrize is used to render each theme
import "./theme.css"
import "./Boxes.css"

export function ThemeContainerBoxes(props) {
  return (
    <div className="Boxes">
      {props.icon}
      <h2>{props.type}</h2>
      <p>{props.content}</p>
    </div>
  );
}
// Themes Component to display Hackathon themes
function Themes({ themes }) {
  return (
    <Container fluid className="theme-section">
      <Row className="justify-content-center">
        <Col className="themes" xs={12}>
          <h1>Hackathon Themes</h1>
        </Col>
      </Row>
      <Row className="themeContainer">
        {Array.isArray(themes) && themes.map((theme, index) => (
          <Col className="theme-box" xs={12} md={6} lg={4} key={index} >
            <div className="theme-content">
            <ThemeContainerBoxes
              icon={theme.icon} // Display the icon for the theme
              type={theme.type} // Display the theme title
              content={theme.content} // Display the theme description
            />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Themes;
