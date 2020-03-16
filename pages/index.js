import React from "react";
import { getIds, getItems } from "../utils/api";
import HeaderList from "../components/header-list";
import BlockList from "../components/block-list";
import PrimaryHeader from "../components/primaryHeader";

export const RenderPosts = ({ posts = [] }) => {
  if (Array.isArray(posts) && posts.length === 0) {
    return <h3 className="error">There was an issue loading recent posts</h3>;
  }

  return (
    <>
      <HeaderList posts={posts} />
      <BlockList posts={posts} />
    </>
  );
};

const LandingPage = ({ posts = [] }) => (
  <>
    <PrimaryHeader />
    <h1 className="heading">Latest News</h1>

    <RenderPosts posts={posts} />
  </>
);

LandingPage.getInitialProps = async () => {
  try {
    const ids = await getIds("newstories", 0, 20);
    const posts = await getItems(ids);
    return {
      posts
    };
  } catch (e) {
    return {
      posts: []
    };
  }
};

export default LandingPage;
