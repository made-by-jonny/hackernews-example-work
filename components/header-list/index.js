import HeaderCard from "../header-card";

const HeaderList = ({ posts, max_posts = 4 }) => (
  <article className="latest-articles">
    <ul id="very-latest-list" className="card-list">
      {posts.slice(0, max_posts).map((props, index) => {
        const { title, url, by, time, descendants } = props;
        return (
          <HeaderCard
            key={index}
            index={index + 1}
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

export default HeaderList;
