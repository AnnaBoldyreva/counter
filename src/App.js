import React from 'react';
import './App.css';
import Counter from "./Counter";
import Settings from "./Settings";

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
        <div className='allApp' >
         <Counter state={this.state} increment={this.increment} reset={this.reset} />
        <Settings/>

        </div>
    );
  }
}




export default App;
