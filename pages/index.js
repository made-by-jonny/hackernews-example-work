import React from "react";
import { getIds, getItems } from "../utils/api";
import HeaderCard from "../components/header-card";
import BlockCard from "../components/block-card";
import PrimaryHeader from "../components/primaryHeader";

const LandingPage = ({ posts = [] }) => (
  <>
    <PrimaryHeader />

    <h1 className="heading">Latest News</h1>
    <article className="latest-articles">
      <ul id="very-latest-list" className="card-list">
        {posts.slice(0, 4).map((props, index) => {
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

    <article className="more-articles">
      <ul id="read-more-list" className="block-list">
        {posts.slice(4, posts.length).map((props, index) => {
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
  </>
);

LandingPage.getInitialProps = async ({}) => {
  const ids = await getIds("newstories", 0, 20);
  const posts = await getItems(ids);

  return {
    posts
  };
};

export default LandingPage;
