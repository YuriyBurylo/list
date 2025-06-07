import React from 'react';
import styles from './User.module.css';
const plus = "https://www.svgrepo.com/show/512681/plus-circle-1441.svg";
const minus = "https://www.svgrepo.com/show/34372/minus.svg";

function User({ id, email, first_name, last_name, avatar, isInvited, onClickInvite }) {
    return (
            <div className={styles.container}>
                <img className={styles.avatar} src={avatar} alt="avatar" />
                    <h3 className={styles.name}>{first_name} {last_name}</h3>
                    <div className={styles.email_sign}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#000000"></path> </g></svg>
                    </div>
                    <div className={styles.email}>{email}</div>
                <img className={styles.plus_minus_btn} onClick={() => onClickInvite(id)} src={isInvited ? minus : plus} alt="sign" />
            </div>
    )
}

export default User;