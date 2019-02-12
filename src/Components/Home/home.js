import React from 'react';
import './home.css';
import Plants from '../Plant/plant';
import {Animated} from "react-animated-css";

const Home = (props)=>{

  return (
    <Animated animationIn="fadeInLeft" isVisible={true}>
        <div id="home">
      <Plants />
    <h3>Mtioui Yassire</h3>
    <p className="mb-0">Full stack developer</p>
  </div>
<a className="hvr-bounce-to-top myBtn" onClick={(e)=>props.onRouteChanged("portfolio")}>Portfolio</a>
</Animated>) ;
}

export default Home;
