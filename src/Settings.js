import React from 'react';
import './App.css';

class Settings extends React.Component{


setSettings = () => {
    alert('fdfdsfd')
};


  render = () => {
    return (
        <div className="App">
          <div>
            <div className='border'>
                max value: <input type="number" name="quantity" min="1" max="10" />
                <br/>
                start value: <input type="number" name="quantity" min="0" max="10" id='firstInput'/>
                <br/>
                <button onClick={this.setSettings}>set</button>

          </div>
          </div>

        </div>
    );
  }
}




export default Settings;
