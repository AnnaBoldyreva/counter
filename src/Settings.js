import React from 'react';
import './App.css';

class Settings extends React.Component{







  render = () => {
    return (
        <div className="App">
          <div>
            <div className='border'>
                max value: <input type="number" name="quantity" min="1" max="5"/>
                <br/>
                start value: <input type="number" name="quantity" min="0" max="5"/>
                <br/>
                <button>set</button>

          </div>
          </div>

        </div>
    );
  }
}




export default Settings;
