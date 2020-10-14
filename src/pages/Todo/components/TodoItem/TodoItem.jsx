import React, {useCallback} from 'react';
import styles from './TodoItem.module.css';
import cn from 'classnames';

const TodoItem = ({item, className='', onDelete}) => {

  const handleDeleteItem = useCallback(() => {
    onDelete(item.id);
  }, [item.id, onDelete])

  return (
    <div className={cn(styles['item'], className)}>
      <div className={styles['item__content']}>{item.text}</div>
      <button onClick={handleDeleteItem}>Удалить</button>
    </div>
  )
}

export default TodoItem;