import { FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import { useTodos } from '../store/TodosProvider';

import Todo from '../types/Todo';

import './TodoItem.scss';

interface TodoItemProps {
  item: Todo;
}

function TodoItem({ item }: TodoItemProps) {
  const { setTodoCompleted } = useTodos();

  return (
    <>
      <span className={item.completed ? 'completed' : ''}>{item.text}</span>
      {item.completed ? (
        <FaSyncAlt
          onClick={() => {
            setTodoCompleted(item.id, false);
          }}
        />
      ) : (
        <FaCheckCircle
          onClick={() => {
            setTodoCompleted(item.id, true);
          }}
        />
      )}
    </>
  );
}

export default TodoItem;
