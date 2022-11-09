import PropTypes from 'prop-types';

import { FaTrashAlt, FaCheckCircle, FaSyncAlt } from 'react-icons/fa';

import { useTodosDispatch } from '../store/TodosProvider';

import './TodoItem.scoped.scss';

function TodoItem({ todo }) {
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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default TodoItem;
