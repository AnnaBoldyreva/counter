import React from 'react';
import './App.css';
import Screen from "./components/Screen/Screen";
import Increment from "./components/Increment/Increment";
import Reset from "./components/Reset/Reset";

class Counter extends React.Component{


  // state = {
  //   currentValue: 0,
  //   maxValue: 5,
  //   initialValue: 0
  // };

  // increment = (currentValue)=> {
  //   let newVal = currentValue + 1;
  //   this.setState(
  //       {currentValue: newVal}
  //   );
  //   if (this.state.currentValue === this.state.maxValue){
  //
  //   }
  // };

  // reset = ()=>{
  //   this.setState({currentValue: this.state.initialValue})
  // };





  render = () => {
    return (
        <div className="App">
          <div>
            <div className='border'>
          <Screen state={this.props.state.currentValue}/>
          <Increment state={this.props.state} increment={this.props.increment}/>
          <Reset state={this.props.state} reset={this.props.reset}/>
          </div>
          </div>

        </div>
    );
  }
}




export default Counter;
