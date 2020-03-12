import styles from "./Card.module.scss";

export default ({ title, url, id }) => (
  <li id={id} className={styles.card}>
    <a href={url}>
      <h3>{title}</h3>
    </a>
  </li>
);
