<<<<<<< HEAD
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
=======
import styles from './Button.module.css';

function Button({ children, onClick1, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick1}>
      {children}
    </button>
  );
}

export default Button;
>>>>>>> 8db943725b5ac4d337ba1f73294ee385d05f8df1
