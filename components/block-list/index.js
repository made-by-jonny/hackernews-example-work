import BlockCard from "../block-card";

const BlockList = ({ posts = [], start_post = 4 }) => (
  <article className="more-articles">
    <ul id="read-more-list" className="block-list">
      {posts.slice(start_post, posts.length).map((props, index) => {
        const { title, url, by, time, descendants } = props;
        return (
          <BlockCard
            key={index}
            title={title}
            url={url}
            author={by}
            published_at={time}
            comments={descendants}
          />
        );
      })}
    </ul>
  </article>
);

export default BlockList;
