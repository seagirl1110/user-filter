import styles from './../styles/UserList.module.css';
import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

function UserList({ users, filterValue }) {
  return (
    <div className={styles.list_container}>
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

UserList.propTypes = {
  users: PropTypes.array,
  filterValue: PropTypes.string,
};

export default connect(mapStateToProps)(UserList);
