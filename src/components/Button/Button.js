import styles from "./Button.module.css";

function Button({ clickHandler, children }) {
  return (
    <button onClick={clickHandler} className={styles.startGameBtn}>
      {children}
    </button>
  );
}

export default Button;
