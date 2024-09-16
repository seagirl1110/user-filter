import './App.css';
import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
