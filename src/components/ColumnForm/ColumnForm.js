import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = (props) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit({ title: value });
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.input}
        placeholder={'Add new column'}
      />
      <button className={styles.button}>Add column</button>
    </form>
  );
};

export default ColumnForm;
