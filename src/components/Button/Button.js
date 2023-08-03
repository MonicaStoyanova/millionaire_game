import styles from "./Button.module.css";

// children bears the name(text in the button)
function Button({ clickHandler, children }) {
  return (
    <button onClick={clickHandler} className={styles.startGameBtn}>
      {children}
    </button>
  );
}

export default Button;
