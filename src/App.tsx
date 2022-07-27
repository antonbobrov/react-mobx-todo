import React from 'react';
import ToDoForm from './todos/ToDoForm';
import ToDoList from './todos/ToDoList';

function App() {
  return (
    <div className="container">
      <h1 className="my-4">To-Do-App</h1>
      <hr />
      <ToDoForm />
      <hr />
      <ToDoList />
    </div>
  );
}

export default App;
