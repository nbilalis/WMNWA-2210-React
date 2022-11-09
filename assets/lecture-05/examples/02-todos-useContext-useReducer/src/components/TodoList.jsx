import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

import './TodoList.scoped.scss';

function TodoList({ title, todos }) {
  if (!todos.length) return null;

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <TodoItem todo={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default TodoList;
