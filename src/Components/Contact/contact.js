import React from 'react';
import './contact.css';
import {Animated} from "react-animated-css";
import {Container, Row, Col} from 'reactstrap';
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare
} from "react-icons/fa";

const Contact = () => {

  return (<Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
    <Container className="p-4 mt-4">
      <Row className="mt-3">
        <Col md="8" id="Scont" className="p-4 mx-auto">

          <h3>contact me</h3>
          <ul>
            <Row>
            <Col md={6}>
              <a href="mailto:yassiremtioui@gmail.com"><li className="em text-xs-center"><FaEnvelope className="icons mt-1 mx-1 mr-4"/>yassiremtioui@gmail.com</li></a>
              <li className="ig text-xs-center"><FaInstagram className="icons mt-1 mx-1 mr-4"/>---- -----</li>
              <a href="https://github.com/Yassiremt"><li className="gh text-xs-center"><FaGithub className="icons mt-1 mx-1 mr-4"/>Yassiremt</li></a>
            </Col>
            <Col md={6}>
              <a href="https://www.linkedin.com/in/yassiremt/"><li className="li text-xs-center"><FaLinkedin className="icons mt-1 mx-1 mr-4"/>Yassire Mtioui</li></a>
              <li className="yt text-xs-center"><FaYoutube className="icons mt-1 mx-1 mr-4"/>---- -----</li>
              <li className="tt text-xs-center"><FaTwitterSquare className="icons mt-1 mx-1 mr-4"/>---- -----</li>
            </Col></Row>
          </ul>
        </Col>

      </Row>
    </Container>
  </Animated>);
}

export default Contact;
