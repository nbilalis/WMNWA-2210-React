import { FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import { useTodosDispatch } from '../store/TodosProvider';

import Todo from '../types/Todo';

import './TodoItem.scss';

interface TodoItemProps {
  item: Todo;
}

function TodoItem({ item }: TodoItemProps) {
  const { dispatch } = useTodosDispatch();

  return (
    <>
      <span className={item.completed ? 'completed' : ''}>{item.text}</span>
      {item.completed ? (
        <FaSyncAlt
          onClick={() => {
            dispatch({ type: 'RESTORE', payload: { id: item.id } });
          }}
        />
      ) : (
        <FaCheckCircle
          onClick={() => {
            dispatch({ type: 'COMPLETE', payload: { id: item.id } });
          }}
        />
      )}
    </>
  );
}

export default TodoItem;
