import PropTypes from 'prop-types';

import { FaTrashAlt, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import { useTodos } from '../store/TodosProvider';

import './TodoItem.scoped.scss';

function TodoItem({ todo }) {
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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default TodoItem;
