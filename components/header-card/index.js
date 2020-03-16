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

HeaderCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  published_at: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default HeaderCard;
