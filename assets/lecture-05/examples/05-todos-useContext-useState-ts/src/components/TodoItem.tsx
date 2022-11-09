import { FaTrashAlt, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import { useTodos } from '@/store/TodosProvider';

import Todo from '@/types/Todo';

import './TodoItem.scoped.scss';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { setTodoState, removeTodo } = useTodos();

  return (
    <div>
      <span className={`text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
      <span className="buttons">
        {todo.completed ? (
          <FaSyncAlt
            onClick={() => {
              setTodoState(todo.id, false);
            }}
          />
        ) : (
          <FaCheckCircle
            onClick={() => {
              setTodoState(todo.id, true);
            }}
          />
        )}
        <FaTrashAlt
          onClick={() => {
            removeTodo(todo.id);
          }}
        />
      </span>
    </div>
  );
}

export default TodoItem;
