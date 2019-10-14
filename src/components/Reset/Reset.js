import React from 'react';
import styles from './Reset.module.css'


class Reset extends React.Component{
  render = () => {
    return (
        <div className={styles.reset}>
            <button>Reset</button>

        </div>
    );
  }
}




export default Reset;
