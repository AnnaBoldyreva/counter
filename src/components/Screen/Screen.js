import React from 'react';
import styles from './Screen.module.css'


class Screen extends React.Component{
  render = () => {
    return (
        <div className={styles.screen}>
            <div className={styles.counter}>counter: {this.props.data}</div>

        </div>
    );
  }
}




export default Screen;
