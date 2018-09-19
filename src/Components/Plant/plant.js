import React from 'react';
import './plant.css';
import Ileaf from '../../Images/leaf.png';
// import Ileaf2 from '../../Images/leaf2.png';
// import Iplant2 from '../../Images/plant2.png';
// import leafs from '../../Images/Asset.png';
import {Animated} from "react-animated-css";


// const arrPlant = () => {
//   let PlantItems = [];
//
//   for (var i = 0; i < 7; i++) {
//     const Plstyle = {
//       top: `${30*i}px`,
//       marginLeft:`${10*i}px`
//     };
//   i % 2===0 ? (PlantItems.push(<img key={i} className="plant" src={Iplant2} alt="" style={Plstyle}/>)):(PlantItems.push(<img className="plant" src={Ileaf2} alt="" style={Plstyle}/>));
//   i % 2===0 ? (PlantItems.push(<img key={i} className="plant" src={Iplant2} alt="" style={Plstyle}/>)):(PlantItems.push(<img className="plant" src={Ileaf2} alt="" style={Plstyle}/>));
//
//   }
//
//   return (PlantItems);
// }

const Plant = () => {

  return (<div>
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={800}   isVisible={true}>
      <img id="leaf" src={Ileaf} alt=""/>
      {/* <img src={leafs} alt="" /> */}
    </Animated>
    {/* {arrPlant()} */}
  </div>);
}

export default Plant;
