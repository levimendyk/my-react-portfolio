import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { BsFacebook } from "react-icons/bs"
import "./styles/Footer.css";

function Footer() {
    return (
        <Container fluid className="mainfooter">
            <Row>
                <Col className='footer-body'>
                <p>Created by Levi Mendyk</p>
                    <ul className= 'footer-social-icons'>
                        <li className= 'social-icons'>
                            <a
                            href="https://github.com/levimendyk"
                            style={{ color: "white" }}
                            target= "_blank"
                            rel="noopener noreferrer">
                                <SiGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/levi-mendyk-2224a386/"
                            style={{ color: "white" }}
                            target= "_blank"
                            rel= "noopener noreferrer">
                                <SiLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href= "https://www.facebook.com/levi.mendyk.1/"
                            style={{ color: "white" }}
                            target= "_blank"
                            rel= "noopener noreferrer">
                                <BsFacebook />
                            </a>

                        </li>

                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;