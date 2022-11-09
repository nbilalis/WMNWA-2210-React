import useInput from '@/hooks/useInput';

import { useTodos } from '@/store/TodosProvider';

import './TodoInput.scoped.scss';

function TodoInput() {
  const { value, bind, reset } = useInput('');
  const { addTodo } = useTodos();

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...bind}
      type="text"
      onKeyPress={(event) => {
        if (event.key === 'Enter' && value.length) {
          addTodo(value);
          reset();
        }
      }}
      title="enter todo text…"
      placeholder="enter todo text…"
    />
  );
}

export default TodoInput;
