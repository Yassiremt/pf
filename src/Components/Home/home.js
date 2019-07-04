import React from 'react';
import './home.css';
import {Animated} from "react-animated-css";

const Home = (props) => {

  return (<Animated animationIn="fadeInLeft" isVisible={true}>
    <div id="home">
      <h3>Mtioui Yassire</h3>
      <p className="mb-0">React/React Native developer</p>
    </div>
    <a className="hvr-bounce-to-top myBtn" onClick={(e) => props.onRouteChanged("portfolio")}>Portfolio</a>
  </Animated>);
}

export default Home;
