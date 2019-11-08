import React from 'react';
import './App.css';

class Settings extends React.Component{

state = {
    maxValue: '',
    initialValue: ''
};

setSettings = () => {
   let newMaxValue = this.state.maxValue;
   this.props.setMaxVal(newMaxValue);
   let newStartValue = this.state.initialValue;
   this.props.setStartVal(newStartValue)
};

onChangeMaxValue = (e) => {
    this.setState({
        maxValue: e.currentTarget.value
    })
};

onChangeStartValue = (e) => {
    this.setState({
        initialValue: e.currentTarget.value
    })
};


  render = () => {
    return (
        <div className="App">
          <div>
            <div className='border'>
                max value: <input type="number" name="quantity" min="1" max="10" onChange={this.onChangeMaxValue} value={this.state.maxValue}
            />
                <br/>
                start value: <input type="number" name="quantity" min="0" max="10" id='firstInput' onChange={this.onChangeStartValue} value={this.state.initialValue}/>
                <br/>
                <button onClick={this.setSettings}>set</button>

          </div>
          </div>

        </div>
    );
  }
}




export default Settings;
