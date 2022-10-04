import { useTodos } from '../store/TodosProvider';

import TodoItem from './TodoItem';

interface TodosListProps {
  title: string;
  completed: boolean;
}

function TodosList({ title, completed }: TodosListProps) {
  const { todos } = useTodos();

  const items = todos.filter((todo) => (todo.completed ?? false) === completed);

  if (!items.length) {
    return null;
  }

  return (
    <>
      <h3>
        {title} ({items.length}):
      </h3>
      <ul>
        {items.map((todo) => (
          <li key={todo.id}>
            <TodoItem item={todo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodosList;
