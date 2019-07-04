import React from 'react';
import './about.css';
import {Animated} from "react-animated-css";
import {Container, Row, Col} from 'reactstrap';
import myimg from '../../Images/mypic.jpg';
import {
  FaGooglePlay,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare,
  FaEnvelope
} from "react-icons/fa";
const About = () => {

  return (<Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
    <Container className="p-4 mt-4">
      <Row className="mt-3">
        <Col md="8" id="Sabt" className="p-4">
          <h4>Hello World ..</h4>
          <p>My name is YASSIRE MTIOUI,
            <br/>
            I'm a creative React/ReactNative developer,
            <br/>based in Fez Morocco .
          </p>
          <h3>Skills</h3>
          <ul className="text-left pl-4">
            <Row>
              <Col>
                <li>React/ReactNative</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>Bootstrap</li>
                <li>SASS</li>
                <li>C#</li>
              </Col>
              <Col>
                <li>SQL</li>
                <li>C</li>
                <li>GitHub</li>
                <li>OOP</li>
                <li>NPM</li>
                <li>Photoshop</li>
              </Col>
            </Row>
          </ul>
        </Col>
        <Col md="4" id="Simg" className="p-0">
          <img className="img-fluid" src={myimg} alt=""/>
          <a href="mailto:yassiremtioui@gmail.com"><FaEnvelope className="icons mt-1 mx-1 em"/></a>
          <a href="https://play.google.com/store/apps/developer?id=YassiReact" className="em">
            <FaGooglePlay className="icons mt-1 mx-1 ig"/></a>
          <a href="https://github.com/Yassiremt">
            <FaGithub className="icons mt-1 mx-1 gh"/></a>
          <a href="https://www.linkedin.com/in/yassiremt/">
            <FaLinkedin className="icons mt-1 mx-1 li"/></a>
          <FaYoutube className="icons mt-1 mx-1 yt dsbl"/>
          <FaTwitterSquare className="icons mt-1 mx-1 tt dsbl"/>
        </Col>
      </Row>
    </Container>
  </Animated>);
}

export default About;
