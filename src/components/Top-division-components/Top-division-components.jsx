import React from "react";
import "./top-division-c.css";
// import MytypedComponent from "../typing-effect/typing.jsx";

import {BANNER,TOP_SECTION, SOCIALS } from "../../Module/General.jsx";

function Btn(props) 
{
  return (
    <button className={props.className}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
}

function About() {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
    </div>
  );
}

function Banner()
{
  return(
    <div className="Banner">
      <img src={BANNER.IMG_SRC} alt="Banner"/>
    </div>
  )
}

function Myinfo() {
  return (
    <div className="Myinfo">
      {/* <Banner/> */}
      <About />
      <p>{TOP_SECTION.SHORT_DESCRIPTION}</p>
      
      <div className="join_dis">
        <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
          <Btn
            ico="fab fa-2x fa-discord"
            className="join_disco"
            type="Join our discord"
            overlay="Click the link"
          />
        </a>
      </div>
      
      {/* First Register Button */}
      <div className="apply-button">
        <a rel="noreferrer" target="_blank" href={TOP_SECTION.REGISTER_LINK}>
          <Btn
            ico="fas fa-user-plus"
            className="register"
            type="Register"
            overlay="Click to Register"
          />
        </a>
      </div>
      
      
    </div>
  );
}

export { Btn, Myinfo };
