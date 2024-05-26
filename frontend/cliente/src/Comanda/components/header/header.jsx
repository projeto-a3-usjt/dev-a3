import styles from "./header.css";

function Header() {
  return (
    <header>
      <div className={styles.buttonContainer}>
        <button className={styles.backButton}>
          <span className={styles.backIcon}>&#8592;</span>
        </button>
      </div>
    </header>
  );
}
export default Header;
