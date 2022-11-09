import { useTodosDispatch } from '@/store/TodosProvider';

import { FaTrashAlt, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import Todo from '@/types/Todo';

import './TodoItem.scoped.scss';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useTodosDispatch();

  return (
    <div>
      <span className={`text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <span className="buttons">
        {todo.completed ? (
          <FaSyncAlt
            onClick={() => {
              dispatch({ type: 'RESTORE', payload: { id: todo.id } });
            }}
          />
        ) : (
          <FaCheckCircle
            onClick={() => {
              dispatch({ type: 'COMPLETE', payload: { id: todo.id } });
            }}
          />
        )}
        <FaTrashAlt
          onClick={() => {
            dispatch({ type: 'REMOVE', payload: { id: todo.id } });
          }}
        />
      </span>
    </div>
  );
}

export default TodoItem;
