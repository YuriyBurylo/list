import React from 'react';
import styles from './Success.module.css';

function Success({ count }) {
    return (
        <div className={styles.container}>
            <h3>Success!</h3>
            <svg fill="#33ce09" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#33ce09"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g></svg>
            <p> Invitations sent {count} persons</p>
            <button className={styles.back_btn} onClick={() => window.location.reload()}>Press</button>
        </div>
    )
}

export default Success;