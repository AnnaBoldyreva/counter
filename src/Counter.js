import React from 'react';
import './App.css';
import Screen from "./components/Screen/Screen";
import Increment from "./components/Increment/Increment";
import Reset from "./components/Reset/Reset";

class Counter extends React.Component{



  render = () => {

    return (
        <div className="App">
          <div>
            <div className='border'>
          <Screen state={this.props.state} />
          <Increment state={this.props.state} increment={this.props.increment}/>
          <Reset state={this.props.state} reset={this.props.reset}/>
          </div>
          </div>

        </div>
    );
  }
}




export default Counter;
