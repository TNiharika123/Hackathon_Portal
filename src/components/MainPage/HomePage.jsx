import React, { useEffect } from "react";
import { Myinfo } from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import { Logo, LogoSectionAbout } from "../logo-section/logoSection.jsx";
import { FirstPrize, PrizeHeading } from "../PrizeTracks/Prizes.jsx";
import { Prizeinfo } from "../../Module/General.jsx";
import { Accordion } from "../FAQ/faq.jsx";
import { Sponsor, SponsorsHead, SponsorUS } from "../Sponsors/sponsors.jsx";
import DisplaySession from "../Session/session.jsx";
import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import { Member, JoinTeam } from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";
// import Themes from "../Themes/Themes";
import {
  TOP_SECTION,
  TeamInfo,
  Session,
  SpeakersInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  FOOTER,
  panels,
  // themesData
} from "../../Module/General.jsx";

// Sponsor Group Component
function SponsorGroup({ sponsors }) {
  return (
    <Row>
      {Array.isArray(sponsors) && sponsors.map((s, index) => (
        <Col className="" sm={12} lg={4} md={6} key={index}>
          <Sponsor srcx={s.src} />
        </Col>
      ))}
    </Row>
  );
}

// Prize Group Component
function PrizeGroup({ prizes }) {
  return (
    <Row>
      {Array.isArray(prizes) && prizes.map((s, index) => (
        <Col className="" sm={12} lg={4} md={6} key={index}>
          <FirstPrize icon={s.icon} type={s.type} content={s.content} />
        </Col>
      ))}
    </Row>
  );
}



// Team Members Component
function TeamMembers({ members }) {
  return (
    <Row className="members">
      {Array.isArray(members) && members.map((s, index) => (
        <Col className="" sm={12} lg={4} md={4} key={index}>
          <Member
            name={s.Name}
            role={s.role}
            img={s.img}
            github  ={s.github}
            linkedin={s.linkedin}
          />
        </Col>
      ))}
    </Row>
  );
}

// Frequently Asked Questions Component
function FrequentlyAsked({ faqs }) {
  return (
    <Row className="sf">
      {Array.isArray(faqs) && faqs.map((s, index) => (
        <Col className="" sm={12} lg={6} md={6} key={index}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

// Session Workshops Component
function SessionWorkshops({ sessions }) {
  return (
    <Container fluid>
      <Row className="members">
        {Array.isArray(sessions) && sessions.map((s, index) => (
          <Col className="" sm={12} lg={4} md={4} key={index}>
            <DisplaySession params={s} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// Main HomePage Component
export default function HomePage(props) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Whole_div" style={{ backgroundImage: `url(${pattern})` }}>
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img src={TOP_SECTION.IMG_SRC} alt="Top Section" />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section */}
        <Row className="logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* Important Dates */}
        <Container fluid className="timeline-section">
        <Col className="impDates">
      <h1>Important Dates</h1>
      <br/>
    </Col>
  
  <Row className="timeline-row">
    
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>October 25,2024</h3>
        <p>Registration Opening</p>
      </div>
    </Col>
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>November 25,2024</h3>
        <p>Registration Closing</p>
      </div>
    </Col>
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>December 15,2024</h3>
        <p>Shortlisted Teams Announcement</p>
      </div>
    </Col>
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>January 11,2025</h3>
        <p>Offline Hackathon</p>
      </div>
    </Col>
  </Row>
  <div className="timeline-line">
    <div className="timeline-progress"></div>
  </div>
</Container>



        {/* Themes */}
        <Container fluid className="theme-section">
        <Col className="themes">
      <h1>Hackathon Themes</h1>
      <br/>
    </Col>

        {/* Hackathon Themes */}
    {/* <Themes themes={themesData} /> Pass themes data as a prop */}

  
  <Row className="timeline-row">
    
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>October 25,2024</h3>
        <p>Registration Opening</p>
      </div>
    </Col>
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>November 25,2024</h3>
        <p>Registration Closing</p>
      </div>
    </Col>
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>December 15,2024</h3>
        <p>Shortlisted Teams Announcement</p>
      </div>
    </Col>
    <Col sm={3} className="timeline-date">
      <div className="date-box">
        <h3>January 11,2025</h3>
        <p>Offline Hackathon</p>
      </div>
    </Col>
  </Row>
  <div className="timeline-line">
    <div className="timeline-progress"></div>
  </div>
</Container>


        {/* Frequently Asked Questions */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map((faq, index) => (
            <FrequentlyAsked key={index} faqs={faq} />
          ))}
        </div>

        {/* Prizes Section */}
        <Row className="prizesection">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map((prize, index) => (
            <PrizeGroup key={index} prizes={prize} />
          ))}
        </Row>

        {/* Non-Coding Prizes Section */}
        <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          <h2>Coming Soon</h2>
        </Row>

        {/* Sponsors Section */}
        <Row className="sponsorSection">
          <SponsorsHead />
          <SponsorUS />
          {sponsorLogos.map((sponsor, index) => (
            <SponsorGroup key={index} sponsors={sponsor} />
          ))}
        </Row>

        {/* Speakers Section */}
        <br />
        <Row className="speakersection">
          <h1>Our Speakers Here</h1>
          <h2>Coming Soon</h2>
        </Row>
        <br />

        {/* Birds Component */}
        <Birds top="120vh" left="0vh" type="" />

        {/* Sessions Section */}
        <Row className="speakersection">
          <h1>Sessions & Workshops</h1>
          <h2>Coming Soon</h2>
        </Row>

        {/* Team Section */}
        <h1>Our Team</h1>
        {FOOTER.JOIN_TEAM.required && <JoinTeam />}
        {Array.isArray(TeamInfo) && TeamInfo.map((member, index) => (
          <TeamMembers key={index} members={member} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}
