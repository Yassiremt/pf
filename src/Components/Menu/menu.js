import React from 'react';
import './menu.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (<div>
      <Navbar  expand="md" light>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          <Nav className="ml-auto" navbar="navbar">
            <NavItem>
              <NavLink onClick={(e)=>this.props.onRouteChanged("home")}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>this.props.onRouteChanged("portfolio")}>Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>this.props.onRouteChanged("about")} >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={(e)=>this.props.onRouteChanged("contact")} >Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>);
  }
}
