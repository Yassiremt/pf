import React from 'react';
import {Col} from 'reactstrap';
import './portfolio.css';
import {Animated} from "react-animated-css";
const PortfolioItem = ({itm, onItemChanged}) => {
  return (<Col md="4" xs="6" className="p-0 " onClick={() => onItemChanged(itm)}>
    <Animated className="pItem" animationIn="zoomInUp" animationOut="zoomOutDown" animationInDelay={1000} isVisible={true}>
      <div className="bdr">
        <div className="coverImg"/>
        <h3 className="ttl">{itm.title}</h3>
      </div>
      <img id="mg" src={itm.img} alt="" className="img-fluid"/>
    </Animated>
  </Col>);
}

export default PortfolioItem;
