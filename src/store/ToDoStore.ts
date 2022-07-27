import { autorun, makeAutoObservable } from 'mobx';
import { ToDoItemType } from './types';

class ToDoStore {
  get todos() {
    return this._todos;
  }

  constructor(
    private _todos: ToDoItemType[],
  ) {
    makeAutoObservable(this);
  }

  add(
    title: string,
  ) {
    this.todos.unshift({
      id: +new Date(),
      title,
      completed: false,
    });
  }

  remove(
    id: number,
  ) {
    this._todos = this._todos.filter((item) => item.id !== id);
  }

  setCompleted(
    id: number,
    val: boolean,
  ) {
    this._todos = this._todos.map((item) => {
      const data = item;
      if (data.id === id) {
        data.completed = val;
      }
      return data;
    });
  }

  get total() {
    return this._todos.length;
  }
}

let lsList: ToDoItemType[] = [];
if (localStorage.getItem('todos')) {
  try {
    lsList = JSON.parse(window.localStorage.getItem('todos') || '');
  } catch (e) {
    //
  }
}

const todos = new ToDoStore(lsList);
export default todos;

autorun(() => {
  const json = JSON.stringify([...todos.todos]);
  window.localStorage.setItem('todos', json);
});
