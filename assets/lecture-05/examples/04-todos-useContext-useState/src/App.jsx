import TodosProvider from './store/TodosProvider';

import Todos from './components/Todos';

import './App.scss';

function App() {
  return (
    <>
      <h1>Yet Another Todo App</h1>
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </>
  );
}

export default App;
