import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FirstPrize } from "../PrizeTracks/Prizes.jsx"; // Assuming themes are similar to prizes
import { themesData } from "../../Module/General.jsx"; // Assuming you have a `themesData` array

function Themes({ themes }) {
  return (
    <Container fluid className="theme-section">
      <Row className="justify-content-center">
        <Col className="themes" xs={12}>
          <h1>Hackathon Themes</h1>
        </Col>
      </Row>
      <Row className="theme-container">
        {Array.isArray(themes) &&
          themes.map((theme, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="theme-box">
              <FirstPrize
                icon={theme.icon}
                type={theme.type}
                content={theme.content}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Themes;
