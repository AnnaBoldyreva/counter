import React from 'react';
import './App.css';
import Screen from "./components/Screen/Screen";
import Increment from "./components/Increment/Increment";
import Reset from "./components/Reset/Reset";

class App extends React.Component{


  state = {
    currentValue: 0,
    maxValue: 5,
    initialValue: 0
  };

  increment = (currentValue)=> {
    let newVal = currentValue + 1;
    this.setState(
        {currentValue: newVal}
    );
    if (this.state.currentValue === this.state.maxValue){

    }
  };

  reset = ()=>{
    this.setState({currentValue: this.state.initialValue})
  };





  render = () => {
    return (
        <div className="App">
          <div className='border'>
          <Screen data={this.state.currentValue}/>
          <Increment data={this.state} increment={this.increment}/>
          <Reset data={this.state} reset={this.reset}/>
          </div>

        </div>
    );
  }
}




export default App;
