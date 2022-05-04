import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
        placeholder={'Add new title'}
      />
      Icon:
      <input
        type="text"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        className={styles.input}
        placeholder={'Add icon'}
      />
      <button className={styles.button}>Add column</button>
    </form>
  );
};

export default ColumnForm;
