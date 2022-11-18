import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import levi from "../../assets/images/levi.JPG";
import html from "../../assets/images/five-html-logo.png";
import css from "../../assets/images/css-3-logo.png";
import javascript from "../../assets/images/javascript-logo.png";
import mongodb from "../../assets/images/mongodb-logo.png";
import mysql from "../../assets/images/mysql-logo.png";
import nodelogo from "../../assets/images/nodelogo.png";
import reactlogo from "../../assets/images/react-logo.png";
import "../styles/About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="header-about">About me, Levi Mendyk</h1>
            <p className="about-info">
              Hello friend, my name is Levi Allen Mendyk. I am from a small town
              called Kearney, NE currently living in Denver, CO. I'm an
              easy-going, fun loving, professional looking to obtain a position
              that allows me to expand my knowledge and experience within the
              Tech Industry. I am set to graduate from the University of
              Denver's Full-Stack Web Development program in Dec. 2022. After
              graduation, I hope to obtain an entry-level Junior Web Developer
              position.
            </p>
            <h6>Fun Facts:</h6>
            <ul className="fun-facts">
              <li>
                My Favorite Color is Black, although there's controversy over if
                black is legally a color, some may call it just a shade
              </li>
              <li>
                My Favorite Hobbies include spening time with friends, watch
                movies, play video games, workout at the gym, and eating food
                (yes, I call it a hobby)
              </li>
              <li>
                My Favorite Movie is the Dark Knight but all movies pertaining
                to Batman are my favorite except for the ones with Ben Affleck
              </li>
              <li>
                My Favorite Food is Mac 'n Cheese, some might even go as far as
                to call me a connoisseur
              </li>
            </ul>
            <h6>Future Goals:</h6>
            <p className="about-info">
              After graduating from DU, I plan on furthering my studies in the
              React programming language. I find it facinating and fun to try
              new things with front-end effects. Also, React Native is another
              avenue of programming I'd like to explore. So many people use apps
              on their phone and tablet devices not only for personal use but in
              their professional lives. I believe there is a lot of opportunity
              down this path.
            </p>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={levi} alt="picture of me" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="skill-heading">Skillsets:</h1>
        <img src={html} alt="html" className="skill-logo" />
        <img src={css} alt="css" className="skill-logo" id="css-id" />
        <img src={javascript} alt="javascript" className="skill-logo" />
        <img src={mongodb} alt="mongodb" className="skill-logo" id="mongo-id"/>
        <img src={mysql} alt="mysql" className="skill-logo" />
        <img src={nodelogo} alt="nodejs" className="skill-logo" />
        <img src={reactlogo} alt="react" className="skill-logo" />
        <h6>.....more to come!</h6>
      </Container>
    </Container>
  );
}

export default About;
