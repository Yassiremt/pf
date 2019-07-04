import React from 'react';
import PortfolioItem from './portfolio_item';
import {Container, Row, Col} from 'reactstrap';
import './portfolio.css';
import {Animated} from "react-animated-css";
import {FaArrowRight, FaLink} from 'react-icons/fa';
let arrItems = [];
let Itm = {};
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: 'Block'
    };
    arrItems = this.props.PorItems.map(pit => <PortfolioItem itm={pit} key={pit.title} onItemChanged={this.props.onItemChanged}/>);
    Itm = this.props.CurrItem;
  }

  render() {
    Itm = this.props.CurrItem;
    return (<Animated className="mt-4" animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
      <Container id="CurrP" className="p-4 mt-4">
        <Row className="mt-3">
          <Col md={6} className="p-0 text-right mx-auto">
            <div className="coverImg"/>
            <img className="bigImg" src={Itm.img} alt=""/>

          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={4} className="p-0 mx-auto text-left">

            <div id="title" className="p-3 h4 text-center">{Itm.title}
              <FaArrowRight className="icarr"/>
              <span style={{
                  display: this.state.shown
                }} className="mb-0 pt-2">
                <span id="text" className="text-left mt-1 mb-0">{Itm.text}
                </span>
                <br/>
                <span id="tech">Technologies :</span>
              </span>

              <ul className="text-left mb-0">
                {
                  Itm.languages.map(l =>< li key = {
                    l
                  } > {
                    l
                  }</li>)
                }
              </ul>
              <a href={Itm.link} className="itmlink" target="_blank">Visit
                <FaLink/></a>
            </div>
          </Col>
        </Row>
        <Row>
          {arrItems}</Row>

      </Container>
    </Animated>);
  }

}
export default Portfolio;
