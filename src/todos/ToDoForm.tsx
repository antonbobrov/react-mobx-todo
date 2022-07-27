import React, { useCallback, useState } from 'react';
import todos from '../store/ToDoStore';

function ToDoForm() {
  const [value, setValue] = useState('');

  const clear = useCallback(() => {
    setValue('');
  }, []);

  const submit = useCallback(() => {
    if (value) {
      todos.add(value);
      clear();
    }
  }, [clear, value]);

  return (
    <div>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-success my-2"
        onClick={submit}
      >
        Add
      </button>
    </div>
  );
}
export default ToDoForm;
