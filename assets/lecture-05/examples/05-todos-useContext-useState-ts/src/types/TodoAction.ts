type TodoAction =
  | { type: 'ADD'; payload: { text: string } }
  | { type: 'REMOVE'; payload: { id: string } }
  | { type: 'COMPLETE'; payload: { id: string } }
  | { type: 'RESTORE'; payload: { id: string } };

export default TodoAction;
