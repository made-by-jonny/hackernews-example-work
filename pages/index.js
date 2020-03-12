import React from "react";
import { getIds, getItems } from "../utils/api";
import Card from "../components/card";

const LandingPage = ({ posts = [] }) => (
  <>
    <h1>Hackernews</h1>

    <article>
      <h2>Very Latest</h2>
      <ul id="very-latest-list" className="card-list">
        {posts.slice(0, 4).map(({ url, title }) => (
          <Card title={title} url={url} />
        ))}
      </ul>
    </article>

    <article>
      <h2>Read Posts</h2>
      <ul id="read-more-list">
        {posts.map(({ url, title }) => (
          <li>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </article>
  </>
);

LandingPage.getInitialProps = async ({}) => {
  const ids = await getIds();
  const posts = await getItems(ids);

  return {
    posts
  };
};

export default LandingPage;
