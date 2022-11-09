import { FaTrashAlt, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import Todo from '@/types/Todo';

import './TodoItem.scoped.scss';

interface TodoItemProps {
  todo: Todo;
  onPrimaryButtonPressed: (id: string) => void;
  onSecondaryButtonPressed: (id: string) => void;
}

function TodoItem({ todo, onPrimaryButtonPressed, onSecondaryButtonPressed }: TodoItemProps) {
  return (
    <div>
      <span className={`text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <span className="buttons">
        {todo.completed ? (
          <FaSyncAlt
            onClick={() => {
              onPrimaryButtonPressed(todo.id);
            }}
          />
        ) : (
          <FaCheckCircle
            onClick={() => {
              onPrimaryButtonPressed(todo.id);
            }}
          />
        )}
        <FaTrashAlt
          onClick={() => {
            onSecondaryButtonPressed(todo.id);
          }}
        />
      </span>
    </div>
  );
}

export default TodoItem;
