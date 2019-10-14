import React from 'react';
import styles from './Reset.module.css'


class Reset extends React.Component{

    resetButtonClick = () => {
        this.props.reset()
    };

  render = () => {
    return (
        <div className={styles.reset}>
            <button onClick={this.resetButtonClick}>Reset</button>

        </div>
    );
  }
}




export default Reset;
