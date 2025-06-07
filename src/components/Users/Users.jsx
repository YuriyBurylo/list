import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import Skeleton from './Skeleton/Skeleton';


function Users({ search, searchFunc, items, loading, onClickInvite, invites, sendInvites }) {
    return (
        <div className={styles.container}>
            <input className={styles.input} value={search} onChange={searchFunc} placeholder="Find"/>
            <div>
                { loading ? (
                                <div className={styles.skeleton}>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                </div> 
                            ) : (
                                <ul>
                                    {items.filter(item => {
                                        const fullName = item.first_name + item.last_name;
                                        return fullName.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase())
                                    }).map(item => <li key={item.id}><User isInvited={invites.includes(item.id)} onClickInvite={onClickInvite} {...item} /></li>)}
                                </ul>
                            )
                }
            </div>
            <button className={styles.btn} onClick={sendInvites}>Send invitations</button>
        </div>
    )
}

export default Users;