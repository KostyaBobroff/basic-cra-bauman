import React, {useState, useCallback} from 'react';
import TodoForm from "./components/TodoForm";
import styles from './Todo.module.css';
import TodoItem from "./components/TodoItem";
import {MOCK_DATA} from "./config";

function Todo() {
  const [data, setData] = useState(MOCK_DATA);

  const handleDelete = useCallback((itemId) => {
    setData(data.filter(item=> item.id !== itemId));
  }, [data]);

  const handleAdd = useCallback((text) => {
    setData([...data, {
      id: data.length,
      text,
      isDone: false
    }])
  }, [data])

  return (
    <div className={styles.todo}>
      <h1 className={styles.todo__header}>TODO</h1>
      <div className={styles["todo__content"]}>
        <TodoForm onAdd={handleAdd}/>
        <div className={styles['todo__items']}>
          {data.map(item =>
            <TodoItem
              item={item}
              key={item.id}
              onDelete={handleDelete}
              className={styles['todo__item']}
            />)}
        </div>
      </div>
    </div>
  );
}

export default Todo;
