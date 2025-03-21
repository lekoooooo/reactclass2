import styles from "./Button.module.css";
function Button() {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.logIn}>Log in</button>
      <button className={styles.signUp}>Sign Up</button>
    </div>
  );
}
export default Button;
