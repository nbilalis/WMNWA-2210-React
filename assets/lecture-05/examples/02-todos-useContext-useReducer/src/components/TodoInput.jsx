import useInput from '../hooks/useInput';

import { useTodosDispatch } from '../store/TodosProvider';

import './TodoInput.scoped.scss';

function TodoInput() {
  const { value, bind, reset } = useInput('');
  const dispatch = useTodosDispatch();

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...bind}
      type="text"
      onKeyPress={(event) => {
        if (event.key === 'Enter' && value.length) {
          dispatch({ type: 'ADD', payload: { text: value } });
          reset();
        }
      }}
      title="enter todo text…"
      placeholder="enter todo text…"
    />
  );
}

export default TodoInput;
