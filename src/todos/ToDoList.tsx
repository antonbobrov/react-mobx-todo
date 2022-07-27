import { observer } from 'mobx-react';
import React from 'react';
import todos from '../store/ToDoStore';
import ToDoItem from './ToDoItem';

function ToDoList() {
  return (
    <>
      {todos.todos.map((item) => (
        <ToDoItem
          {...item}
          key={item.id}
        />
      ))}
    </>
  );
}
export default observer(ToDoList);
