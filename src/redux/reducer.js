import { SET_FILTER } from './actions';

const initialState = {
  users: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Charlie' },
    { id: 3, name: 'David' },
    { id: 4, name: 'Max' },
    { id: 5, name: 'Kate' },
    { id: 6, name: 'Bob' },
    { id: 7, name: 'Megan' },
    { id: 8, name: 'Tom' },
    { id: 9, name: 'Clare' },
    { id: 10, name: 'Alex' },
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
