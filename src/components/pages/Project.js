import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Projects.css";
import Particle from "../Particle";
import { SiGithub } from "react-icons/si";
import { AiOutlineLink } from "react-icons/ai";
import mythic from "../../assets/images/mythic-plus-team.png";
import magic from "../../assets/images/magic-app.png";
import first from "../../assets/images/week-2-challenge.png";
import weather from "../../assets/images/weather-dashboard.png";
import schedule from "../../assets/images/work-day-schedule.png";
import password from "../../assets/images/week-3-challenge.png";

function ProjectCards(props) {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {" "}
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.githubLink} target="_blank">
          <SiGithub />
        </Button>
        <Button variant="primary" href={props.webLink} target="_blank">
          <AiOutlineLink />
        </Button>
      </Card.Body>
    </Card>
  );
}

function Project() {
  return (
    <Container fluid className="projects">
      <Particle />
      <Container>
        <h1 className="proj-page-head">My Projects Portfolio:</h1>
        <Row style={{ justifyContent: "center, paddingBottom: 5px" }}>
          <Col md="4" className="proj-Card">
            <ProjectCards
              imgPath={mythic}
              title="Mythic+ Teams:"
              description="In the World of Warcraft, Mythic+ provides a way for players to engage in progressively more challenging content to have fun, earn better loot, and improve their skills. With Mythic+ Teams you can easily construct your character teams before each challenge to optimize planning and execution."
              githubLink="https://github.com/Hoffalypse/mythic-plus-team"
              webLink="https://mythic-plus-team.herokuapp.com/"
            />
          </Col>
          <Col md="4" className="proj-Card">
            <ProjectCards
              imgPath={magic}
              title="MGT-Card Wishlist Creator:"
              description="Use our wishlist generator to create a reference list of cards you wish to purhcase. You can save a list on your personal device and compare your cards to others!"
              githubLink="https://github.com/peoplesm/magic-app"
              webLink="https://peoplesm.github.io/magic-app/"
            />
          </Col>
          <Col md="4" className="proj-Card">
            <ProjectCards
              imgPath={first}
              title="My First Website:"
              description="Humble beginnings as a fresh new coder when I first started my Full-Stack Web Development Program. This website is my first attempt of building a portfolio about me unlike the one you see now."
              githubLink="https://github.com/levimendyk/week-2-challenge"
              webLink="https://levimendyk.github.io/week-2-challenge/"
            />
          </Col>
          <Col md="4" className="proj-Card">
            <ProjectCards
              imgPath={weather}
              title="Weather Dashboard:"
              description="Weather Dashboard allows you to search any City in the U.S. and it will pull up the current-day/five-day forecast for that searched City."
              githubLink="https://github.com/levimendyk/weather-dashboard"
              webLink="https://levimendyk.github.io/weather-dashboard/"
            />
          </Col>
          <Col md="4" className="proj-Card">
            <ProjectCards
              imgPath={schedule}
              title="Work Day Scheduler:"
              description="Work Day Scheduler is an application that allows you to schedule your day with a color coordination tool allowing to see past, present, and future events."
              githubLink="https://github.com/levimendyk/work-day-schedule"
              webLink="https://levimendyk.github.io/work-day-schedule/"
            />
          </Col>
          <Col md="4" className="proj-Card">
            <ProjectCards
              imgPath={password}
              title="Password Generator:"
              description="Password Generator will prompt specific questions for the user regarding what kind of password to generate."
              githubLink="https://github.com/levimendyk/week-3-challenge"
              webLink="https://levimendyk.github.io/week-3-challenge/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Project;
