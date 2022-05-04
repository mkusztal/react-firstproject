import styles from './Button.module.scss';

const Button = () => {
  return (
    <button className={styles.button}>
      <span className="fa fa-search" />
    </button>
  );
};

export default Button;
