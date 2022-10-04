import { FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import Todo from '../types/Todo';

import './TodoItem.scss';

interface TodoItemProps {
  item: Todo;
  onButtonPressed: (is: string) => void;
}

function TodoItem({ item, onButtonPressed }: TodoItemProps) {
  return (
    <>
      <span className={item.completed ? 'completed' : ''}>{item.text}</span>
      {item.completed ? (
        <FaSyncAlt
          onClick={() => {
            onButtonPressed(item.id);
          }}
        />
      ) : (
        <FaCheckCircle
          onClick={() => {
            onButtonPressed(item.id);
          }}
        />
      )}
    </>
  );
}

export default TodoItem;
