import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BlockCard from "../../components/block-card";

const post = {
  by: "bookofjoe",
  descendants: 0,
  id: 22582812,
  score: 1,
  time: 1584271451,
  title:
    "Coronary Sinus Neuropeptide Y Levels&Adverse Outcomes in Patients W Stable CHF",
  type: "story",
  url: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
};

test("BlockCard renders without error", async () => {
  const { by, descendants, time, title, url } = post;
  const { container } = render(
    <BlockCard
      url={url}
      title={title}
      published_at={time}
      comments={descendants}
      author={by}
    />
  );
  const linkTitle = container.querySelector("a > h3").textContent;

  expect(linkTitle).toBe(post.title);
});
