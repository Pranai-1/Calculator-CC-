import React from "react";
import Props from "./props";

export default class Props1 extends React.Component {
  render() {
    return (
        <div>
      <Props signal= "red"/>  
      <div className="flex justify-center items-center p-2 m-2 bg-slate-200 w-max h-max">
        <p className="font-bold tecxt-xl">Hey I am inside props</p>
      </div>
      </div>
    );
  }
}
