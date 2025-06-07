import React from 'react';
import styles from './Success.module.css';

function Success({ count }) {
    return (
        <div className={styles.container}>
            <h3>Success!</h3>
            <p> Invitations sent {count} persons</p>
            <button className={styles.back_btn} onClick={() => window.location.reload()}>Press</button>
        </div>
    )
}

export default Success;