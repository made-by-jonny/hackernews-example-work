import styles from "./BlockCard.module.scss";
import moment from "moment";
import PropTypes from "prop-types";

const BlockCard = ({ url, title, published_at, comments, author }) => (
  <li key={title} className={styles.blockCard}>
    <a href={url}>
      <span>{title}</span>
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

BlockCard.prototype = {
  url: PropTypes.string.required,
  title: PropTypes.string.required,
  published_at: PropTypes.number.required,
  comments: PropTypes.number.required,
  author: PropTypes.string.required
};

export default BlockCard;
