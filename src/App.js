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

    setStartVal = (newStartValue) => {
        let newStartVal = newStartValue;
        this.setState({
            currentValue: newStartVal
        },
            () => {
                this.saveState();
            }
            )
    };

    setMaxVal = (newMaxValue) => {
        let newMax = newMaxValue;
        this.setState({
            maxValue: newMax
        },
            () => {
                this.saveState();
            }
        )
    };

    increment = (currentValue)=> {
        let newVal = currentValue ;
        newVal ++ ;
        this.setState(
            {currentValue: newVal },
            () => {
                this.saveState();
            }
        );
        // if (this.state.currentValue === this.state.maxValue){
        //
        // }
    };

    reset = ()=>{
        this.setState({currentValue: this.state.initialValue},
        () => {
            this.saveState();
        })
    };

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('counter', stateAsString)
    };

    restoreState = () => {
        let stateAsString = localStorage.getItem('counter');
        if (stateAsString) {
            let state = JSON.parse(stateAsString);
            this.setState(state);
        }
    };


  render = () => {

      let errorFilter = this.state.currentValue === this.state.maxValue ? 'error' : ' ';
    return (
        <div className='allApp' >
         <Counter state={this.state} increment={this.increment} reset={this.reset} className={errorFilter} />
        <Settings state={this.state} setMaxVal={this.setMaxVal} setStartVal={this.setStartVal}/>

        </div>
    );
  }
}


export default App;
