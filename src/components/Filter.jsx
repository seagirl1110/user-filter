import styles from './../styles/Filter.module.css';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from './../redux/actions';

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
    <div>
      <input value={value} onChange={handleChange} type="text" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filterValue: state.filterValue,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterValue: (value) => dispatch(setFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
