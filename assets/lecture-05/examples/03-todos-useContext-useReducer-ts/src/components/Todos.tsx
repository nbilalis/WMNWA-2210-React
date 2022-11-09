import { useTodos } from '@/store/TodosProvider';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import './Todos.scoped.scss';

function Todos() {
  const todos = useTodos();

  return (
    <>
      <h2>Todos: {todos.length ? todos.length : '[none]'}</h2>
      <TodoInput />
      <TodoList title="Pending" todos={todos.filter((item) => !item.completed)} />
      <TodoList title="Completed" todos={todos.filter((item) => item.completed)} />
    </>
  );
}

export default Todos;
