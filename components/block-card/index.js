import styles from "./BlockCard.module.scss";
import moment from "moment";
import PropTypes from "prop-types";

const BlockCard = ({ url, title, published_at, comments, author }) => (
  <li key={title} className={styles.blockCard}>
    <a href={url}>
      <h3>{title}</h3>
      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
    </a>
    <section>
      <span>{author}</span>
      <span>{moment.unix(published_at).fromNow()}</span>
      <span>
        <i className="fa fa-comment" aria-hidden="true"></i> {comments}
      </span>
    </section>
  </li>
);

BlockCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  published_at: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default BlockCard;
