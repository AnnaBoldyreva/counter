import React from 'react';
import './App.css';
import Counter from "./Counter";
import Settings from "./Settings";

class App extends React.Component{

    state = {
        currentValue: [],
        maxValue: [],
        initialValue: 0

    };



    // setMaxVal = (newMaxValue) => {
    //   let newMaxVal =  newMaxValue;
    //   this.setState({
    //       maxValue: newMaxVal
    //   });
    // };

    setStartVal = (newStartValue) => {
        let newStartVal = newStartValue;
        this.setState({
            currentValue: newStartVal
        })
    };

    setMaxVal = (newMaxValue) => {
        let newMax = newMaxValue;
        this.setState({
            maxValue: newMax
        })
    };

    increment = (currentValue)=> {
        let newVal = currentValue ;
        newVal ++ ;
        this.setState(
            {currentValue: newVal }
        );
        // if (this.state.currentValue === this.state.maxValue){
        //
        // }
    };

    reset = ()=>{
        this.setState({currentValue: this.state.initialValue})
    };


  render = () => {
    return (
        <div className='allApp' >
         <Counter state={this.state} increment={this.increment} reset={this.reset} />
        <Settings state={this.state} setMaxVal={this.setMaxVal} setStartVal={this.setStartVal}/>

        </div>
    );
  }
}




export default App;
