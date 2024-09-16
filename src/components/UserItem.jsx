import styles from './../styles/UserItem.module.css';
import React from 'react';

function UserItem({ id, name }) {
  return <div className={styles.item}>{name}</div>;
}

export default UserItem;
