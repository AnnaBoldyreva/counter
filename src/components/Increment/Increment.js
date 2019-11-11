import React from 'react';
import styles from './Increment.module.css'


class Increment extends React.Component{

    state = {
        error : false
    };

    incButtonClick = () => {
        if (this.props.state.currentValue !== this.props.state.maxValue){
            this.props.increment(this.props.state.currentValue)
        }
        // else {
        //     this.setState({
        //         error: true
        //     })
        // }
    };


  render = () => {
      let isDisabled = this.props.state.currentValue === this.props.state.maxValue;

      // let errorFilter = this.state.error ? 'error' : '';
    return (
        <div className={styles.inc}>
            <button onClick={this.incButtonClick} disabled={isDisabled} >inc</button>

        </div>
    );
  }
}




export default Increment;
