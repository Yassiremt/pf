import React from 'react';
import './about.css';
import {Animated} from "react-animated-css";
import {Container, Row, Col} from 'reactstrap';
import myimg from '../../Images/mypic.jpg';
import {
  FaInstagram,
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
          <h4>Hello My Friends ..</h4>
          <p>My name is YASSIRE MTIOUI,
            <br/>
            I'm a creative full stack developer ,
            <br/>based in Fez Morocco .
          </p>
          <h3>Skills</h3>
          <ul className="text-left pl-4">
            <Row>
              <Col>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>SASS</li>
                <li>C#</li>
                <li>HTML5</li>
                <li>CSS3</li>
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
          <a href="mailto:yassiremtioui@gmail.com" className="em"><FaEnvelope className="icons mt-1 mx-1"/></a>

          <FaInstagram className="icons mt-1 mx-1 ig dsbl"/>
          <a href="https://github.com/Yassiremt" className="gh">
            <FaGithub className="icons mt-1 mx-1"/></a>
          <a href="https://www.linkedin.com/in/yassiremt/" className="li">
            <FaLinkedin className="icons mt-1 mx-1"/></a>
          <FaYoutube className="icons mt-1 mx-1 yt dsbl"/>
          <FaTwitterSquare className="icons mt-1 mx-1 tt dsbl"/>
        </Col>
      </Row>
    </Container>
  </Animated>);
}

export default About;
