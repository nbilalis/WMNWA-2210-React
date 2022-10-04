import Todo from './Todo';

interface TodoAction {
  type: 'ADD' | 'COMPLETE' | 'RESTORE';
  payload: Todo;
}

export default TodoAction;
