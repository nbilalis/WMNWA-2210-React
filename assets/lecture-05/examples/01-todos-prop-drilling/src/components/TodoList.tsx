import Todo from '@/types/Todo';

import TodoItem from './TodoItem';

import './TodoList.scoped.scss';

interface TodoListProps {
  todos: Todo[];
  onPrimaryButtonPressed: (id: string) => void;
  onSecondaryButtonPressed: (id: string) => void;
}

function TodoList({ todos, onPrimaryButtonPressed, onSecondaryButtonPressed }: TodoListProps) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <TodoItem
            todo={item}
            onPrimaryButtonPressed={onPrimaryButtonPressed}
            onSecondaryButtonPressed={onSecondaryButtonPressed}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
