import React from 'react';
import styles from './Increment.module.css'


class Increment extends React.Component{
  render = () => {
    return (
        <div className={styles.inc}>
            <button>inc</button>

        </div>
    );
  }
}




export default Increment;
