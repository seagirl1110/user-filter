import { SET_FILTER } from './actions';

const initialState = {
  users: [
    'Alice',
    'Charlie',
    'David',
    'Max',
    'Kate',
    'Alex',
    'Bob',
    'Megan',
    'Tom',
    'Clare',
  ],
  filterValue: '',
};

const userReducer = (state = initialState, { type, payload }) => {
  if (type === SET_FILTER) {
    return {
      ...state,
      filterValue: payload,
    };
  }
  return state;
};

export default userReducer;
