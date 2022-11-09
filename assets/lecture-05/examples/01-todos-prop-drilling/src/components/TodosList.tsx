import TodoItem from './TodoItem';

import Todo from '../types/Todo';

interface Props {
  items: Todo[];
  onButtonPressed: (id: string) => void;
}

function TodosList({ items, onButtonPressed }: Props) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <TodoItem item={todo} onButtonPressed={onButtonPressed} />
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
