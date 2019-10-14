import React from 'react';
import './App.css';
import Screen from "./components/Screen/Screen";
import Increment from "./components/Increment/Increment";
import Reset from "./components/Reset/Reset";

class App extends React.Component{
  render = () => {
    return (
        <div className="App">
          <Screen/>
          <Increment/>
          <Reset/>

        </div>
    );
  }
}




export default App;
