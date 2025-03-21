import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.description}>
        Build Your Own Site like a Lego Constructor
      </h1>
      <p className={styles.paragraph}>
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </p>
    </div>
  );
}
export default Hero;
