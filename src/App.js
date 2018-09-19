import React, {Component} from 'react';
import './App.css';
import Menu from './Components/Menu/menu';
import Home from './Components/Home/home';
import Portfolio from './Components/Portfolio/portfolio';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Items from './myData.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      CurrItem: Items[0]
    };
  }
  onRouteChanged = (rte) => {
    this.setState({route: rte})
  }

  render() {
    return (<div className="App">
      <Menu onRouteChanged={this.onRouteChanged}/> {
        this.state.route === 'home'
          ? <Home onRouteChanged={this.onRouteChanged} />
          : (
            this.state.route === 'portfolio'
            ? <Portfolio PorItems={Items} CurrItem={this.state.CurrItem} onItemChanged={CurrItem => this.setState({CurrItem})}/>
            : (this.state.route === 'about'
            ? <About/> : <Contact />))
      }

    </div>);
  }
}

export default App;
