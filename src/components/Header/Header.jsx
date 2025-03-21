import styles from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
function Header() {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.logo}>Startup 3 </h2>
      <Navigation />
    </div>
  );
}
export default Header;
