import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../../assets/images/levi-resume.jpg"

export default function Resume() {
  return (
  <Container fluid className="resume-section">
  <Particle />
  <Row style={{ justifyContent: "center", position: "relative" }}>
    <Button
      variant="primary"
      href="https://docs.google.com/document/d/1LwGf8AjUcaP1DKFypkNbVjuUwcJpjcsX/edit"
      target="_blank"
      style={{ maxWidth: "250px" }}
    >
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  </Row>
  <img src={resume} alt="resume" />
  </ Container>
  );
}
