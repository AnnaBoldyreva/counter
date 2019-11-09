import React from 'react';
import './App.css';

class Settings extends React.Component{

state = {
    maxValue: [],
    currentValue: []
};

    onChangeMaxValue = (e) => {
        let newMaxVal = parseInt(e.currentTarget.value);
    this.setState({
        maxValue: newMaxVal
    })
    };


    onChangeStartValue = (e) => {
        let startValue = parseInt(e.currentTarget.value);
        this.setState({
            currentValue: startValue
        })
    };

setSettings = () => {
    let newMaxValue = this.state.maxValue;
    this.props.setMaxVal(newMaxValue);
   let newStartValue = this.state.currentValue;
   this.props.setStartVal(newStartValue)
};






  render = () => {
    return (
        <div className="App">
          <div>
            <div className='border'>
                max value: <input type="number" name="quantity" min="1" max="11"  onChange={this.onChangeMaxValue} value={this.state.maxValue}
            />
                <br/>
                start value: <input type="number" name="quantity" min="0" max="10" id='firstInput' onChange={this.onChangeStartValue} value={this.state.currentValue}/>
                <br/>
                <button onClick={this.setSettings}>set</button>

          </div>
          </div>

        </div>
    );
  }
}




export default Settings;
