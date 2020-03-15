import styles from "./PrimaryHeader.module.scss";

export default ({ id }) => (
  <header id={id} className={styles.primaryHeader}>
    Hackernews
  </header>
);
