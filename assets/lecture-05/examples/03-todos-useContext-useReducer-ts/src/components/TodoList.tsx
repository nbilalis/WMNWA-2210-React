import Todo from '@/types/Todo';

import TodoItem from './TodoItem';

import './TodoList.scoped.scss';

interface TodoListProps {
  title: string;
  todos: Todo[];
}

function TodoList({ title, todos }: TodoListProps) {
  if (!todos.length) return null;

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <TodoItem todo={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
