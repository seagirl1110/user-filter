import styles from './../styles/UserList.module.css';
import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

function UserList({ users, filterValue }) {
  return (
    <div>
      {users
        .filter((user) =>
          user.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filterValue: state.filterValue,
});

export default connect(mapStateToProps)(UserList);
