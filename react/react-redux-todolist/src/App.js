import React from 'react';
import Addto from './todo/Addto'
import TodoList from './todo/TodoList'
import  Filter from './todo/Filter'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Addto />
        <TodoList />
        <Filter />
      </div>
    )
  }
}

export default App;
