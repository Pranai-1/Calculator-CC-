import React from "react";

export default class Bind extends React.Component {
  constructor() {//there is no need to explicitly mention props inside constructor but super() must be mentioned to get 
    //access to all the methods of React.component class,check the console.log(this)
  super()
    this.state = {
      name: "",
      submitted: false,
    };
    
    this.handler = this.handler.bind(this);
    this.x = this.x.bind(this);
    console.log(this)
  }

  componentDidMount(){
    this.setState({name:"Pranai"})
  }
//because of componentDidMount component gets unmounted, after a fraction of second of rendering the component initially and then 
//it gets unmounted and then component gets mounted again with state values present in the componentDidMount function
  componentDidUpdate(prev){
    if(prev.name!==this.state.name)
    console.log("Updated")
  }

  componentWillUnmount(){
    console.log("unmounted")
  }
  handler(e) {
    this.setState((prev) => ({
      ...prev,
      name: e.target.value
    }));
  }
  

  x() {
    this.setState({ submitted: true}); 
  }

  render() {
    const { name, submitted } = this.state;
    let message;
    const { signal } = this.props;
    console.log(signal)

    if (submitted) {
      message = <h1>Form submitted! Thank you, {name}!</h1>;
    } else {
      message = <h1>Hello, React! by {name}</h1>;
    }

    return (
      <div>
        {message}
        <p className="font-bold text-xl text-red-600">{signal}</p>
        <input
          type="text"
          placeholder="type here"
          className="font-medium m-2 bg-slate-100 rounded-xl py-1 px-2"
          onChange={this.handler}
          value={name} // Ensure that the input value is controlled by the component state
        />
        <button
          onClick={this.x}
          className="bg-blue-500 rounded-lg py-1 px-2 m-2"
        >
          Submit
        </button>
      </div>
    );
  }
}
