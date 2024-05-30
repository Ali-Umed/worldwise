import styles from './Button.module.css';

function Button({ children, onClick1, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick1}>
      {children}
    </button>
  );
}

export default Button;
