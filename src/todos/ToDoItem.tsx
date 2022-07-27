import React from 'react';
import todos from '../store/ToDoStore';
import { ToDoItemType } from '../store/types';

function ToDoItem({
  id,
  title,
  completed,
}: ToDoItemType) {
  const checked = completed;

  return (
    <div>
      <h2>{title}</h2>
      <div className="form-check my-2">
        <label
          className="form-check-label"
          htmlFor={`todo-${id}`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id={`todo-${id}`}
            checked={checked}
            onChange={(e) => {
              todos.setCompleted(id, e.target.checked);
            }}
          />
          Done!
        </label>
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => todos.remove(id)}
      >
        Delete

      </button>
      <hr />
    </div>
  );
}
export default ToDoItem;
