import TodosList from './TodosList';
import TodosProvider from '../store/TodosProvider';

import './Todos.scss';
import TodoInput from './TodoInput';

function Todos() {
  return (
    <>
      <h2>Todos:</h2>
      <TodosProvider>
        <TodoInput />
        <TodosList title="Pending" completed={false} />
        <TodosList title="Completed" completed />
      </TodosProvider>
    </>
  );
}

export default Todos;
