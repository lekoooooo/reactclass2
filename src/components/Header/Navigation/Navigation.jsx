import styles from "./Navigation.module.css";
function Navigation() {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul>
          <li>
            <a href="#">Tour</a>
          </li>
          <li>
            <a href="#">Price</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">F.A.Q.</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navigation;
