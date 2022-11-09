interface TodoAction {
  type: 'ADD' | 'COMPLETE' | 'RESTORE';
  payload: {
    id?: string;
    text?: string;
  };
}

export default TodoAction;
