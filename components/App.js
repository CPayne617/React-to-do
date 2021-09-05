import React from 'react';
import '../syles/App.css';
import TodoList from './ToDoList';
import LastItemDisplay from './LastItemDisplay';

function App() {
  return (
    <div className="main">
      <h2 className="title">  Checklist  </h2>
      <TodoList />
      <LastItemDisplay />
    </div>
  );
}

export default App;
