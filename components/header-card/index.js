import styles from "./Card.module.scss";
import moment from "moment";
import PropTypes from "prop-types";

const HeaderCard = ({ title, url, comments, published_at, author, index }) => (
  <li key={title} data-index={index} className={styles.card}>
    <span className={styles.author}>{author}</span>
    <a href={url}>
      <h3 className={styles.heading}>{title}</h3>
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </a>
    <section>
      <span>{moment.unix(published_at).fromNow()}</span>
      <span>
        <i className="fa fa-comment" aria-hidden="true"></i> {comments}
      </span>
    </section>
  </li>
);

HeaderCard.prototype = {
  url: PropTypes.string.required,
  title: PropTypes.string.required,
  index: PropTypes.number.required,
  published_at: PropTypes.number.required,
  comments: PropTypes.number.required,
  author: PropTypes.string.required
};

export default HeaderCard;
