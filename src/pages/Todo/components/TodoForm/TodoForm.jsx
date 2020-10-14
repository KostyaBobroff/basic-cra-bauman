import React, {useCallback, useState} from 'react';
import styles from './TodoForm.module.css';

console.log(styles);

const TodoForm = ({onAdd}) => {
  const [inputValue, setValue] = useState('');

  const handleClick = useCallback(() => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
    }

    setValue('');
  }, [onAdd, inputValue])

  return (
    <div className={styles['todo-form']}>
      <input
        type="text"
        placeholder="add todo..."
        className={styles['todo-form__input']}
        onChange={event => setValue(event.target.value)}
        value={inputValue}
      />
      <button className={styles['todo-form__button']} onClick={handleClick}>Add</button>
    </div>
  )
}

export default TodoForm;