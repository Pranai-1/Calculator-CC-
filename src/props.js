import React from "react";
import Bind from "./Bind";

export default class Props extends React.Component {
  
  render() {
    console.log("I am just passing  "+  this.props.signal) //this shouldn't get render whenever props changes,thats why we use recoil
    return (
        <div>
          <div>WELCOME</div>
      <Bind signal= {this.props.signal}/>
      </div>
    );
  }
}
