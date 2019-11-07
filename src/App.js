import React from 'react';
import './App.css';
import Counter from "./Counter";
import Settings from "./Settings";

class App extends React.Component{


  render = () => {
    return (
        <div className='allApp' >
         <Counter/>
        <Settings/>

        </div>
    );
  }
}




export default App;
