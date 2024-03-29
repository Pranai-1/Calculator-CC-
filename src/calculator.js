import React from "react";

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      currentInput: "0",
    };
    this.handleButtonClick=this.handleButtonClick.bind(this)
  }

  handleButtonClick(value) {
    let temp = this.state.currentInput;
    if (temp === "0") temp = value;
    else temp = temp + value;
    this.setState((prev) => ({
      ...prev,
      currentInput: temp,
    }));
  };

  getResult = () => {//This is arrow function,no need to bind because it will follow lexographical scoping and takes the instance 
    //of the parent class 
    try {  
      const result = eval(this.state.currentInput);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid input");
      }
      this.setState((prev) => ({
        ...prev,
        currentInput:result,
        result: this.state.currentInput,
      }));
    } catch (error) {
      this.setState((prev) => ({
        ...prev,
        currentInput:0,
        result: "ERR",
      }));
    }
  };

  //   async componentDidMount() {
//     console.log("mount")
//     this.setState({ username: "in mount" });
//   }
//   componentDidUpdate() {
//     console.log("update")
//     this.setState({ username: "in Update" });//This will cause infinite render
//   }

    //  componentDidMount() {
    //     this.timer=setInterval(()=>{console.log("mounting")},3000)//if we dont clear this interval it will be present in the browser 
        //environment irrespective of whether this current component gets unmounted or not
    //   }
    //   componentWillUnmount(){
    //     clearInterval(this.timer)
    //   }

    x=async()=>{
      console.log(10)
   }
   render() {//This will gets called for initial render and renders after state change,if no state change
    //in lifecycle methods,this wont get called 
   // console.log(this.x())//Promise {<fulfilled>: undefined
    return (
      <div className="w-screen h-screen bg-slate-100 flex flex-col justify-center items-center">
        <p className="text-orange-600 font-bold text-2xl mb-4">Welcome Here!</p>
        <div className="w-96 bg-indigo-200 rounded-lg p-4">
          <div className="mb-4">
            <p className="text-right text-2xl mb-2">{this.state.result}</p>
            <p className="text-right text-2xl font-mono">{this.state.currentInput}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", ".", "+", "-", "/"].map((btn) => (
              <button
                key={btn}
                className="w-full py-2 text-lg font-bold bg-blue-500 text-white rounded-md transition duration-300 hover:bg-blue-600"
                onClick={() => this.handleButtonClick(btn)}
              >
                {btn}
              </button>
            ))}
            <button className="w-full py-2 text-lg font-bold bg-blue-500 text-white rounded-md " onClick={() => this.getResult()}>=</button>
            <button className="w-full py-2 text-lg font-normal bg-blue-500 text-white rounded-md " onClick={() => this.setState((prev) => ({ ...prev, result: 0, currentInput: "" }))}>cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
