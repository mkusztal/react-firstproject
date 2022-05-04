import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={styles.button}>
      <span className={'fa fa-search'} />
    </button>
  );
};

export default Button;
