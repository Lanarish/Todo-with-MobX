import { makeAutoObservable } from "mobx";

// Standard interface and functions
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], title: string): Todo[] => [
  ...todos,
  {
    userId: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    title,
    completed: false,
  },
];

// MobX implementation
class Store {
  todos: Todo[] = [];
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = "";
  }

  load(url: string) {
    fetch(url)
      .then((resp) => resp.json())
      .then((tds: Todo[]) => (store.todos = tds));
  }
}

const store = new Store();
export default store;
