import styles from "./Card.module.css";
function Card() {
  return (
    <div className={styles.cardContainer}>
      <p className={styles.firstBottomP}>
        A high-quality solution for a beautiful startup website.
      </p>
      <p className={styles.secondBottomP}>
        Startups can save money on design and code and use those savings to
        develop the business.
      </p>
      <p className={styles.thirdBottomP}>
        Startup Framework includes great form options for your startup projects.
      </p>
      <div className={styles.line}></div>
      <div className={styles.lineSecond}></div>
    </div>
  );
}
export default Card;
