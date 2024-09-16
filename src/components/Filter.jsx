import styles from './../styles/Filter.module.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from './../redux/actions';
import PropTypes from 'prop-types';

function Filter({ filterValue, setFilterValue }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    filterValue && setValue(filterValue);
  }, []);

  const handleChange = (evt) => {
    const newValue = evt.target.value;
    setValue(newValue);
    setFilterValue(newValue);
  };

  return (
    <input
      className={styles.filter_input}
      value={value}
      onChange={handleChange}
      type="text"
    />
  );
}

const mapStateToProps = (state) => ({
  filterValue: state.filterValue,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValue: (value) => dispatch(setFilter(value)),
});

Filter.propTypes = {
  filterValue: PropTypes.string,
  setFilterValue: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
