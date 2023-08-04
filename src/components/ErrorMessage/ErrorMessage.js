import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.errorMessage}>
      <p>Please refresh and choose another category</p>
    </div>
  );
};

export default ErrorMessage;
