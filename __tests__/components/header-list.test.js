import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import HeaderList from "../../components/header-list";

const posts = [
  {
    by: "bookofjoe",
    descendants: 0,
    id: 22582812,
    score: 1,
    time: 1584271451,
    title:
      "Coronary Sinus Neuropeptide Y Levels&Adverse Outcomes in Patients W Stable CHF",
    type: "story",
    url: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
  },
  {
    by: "bookofjoe",
    descendants: 0,
    id: 22582812,
    score: 1,
    time: 1584271451,
    title:
      "Coronary Sinus Neuropeptide Y Levels&Adverse Outcomes in Patients W Stable CHF",
    type: "story",
    url: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
  },
  {
    by: "bookofjoe",
    descendants: 0,
    id: 22582812,
    score: 1,
    time: 1584271451,
    title:
      "Coronary Sinus Neuropeptide Y Levels&Adverse Outcomes in Patients W Stable CHF",
    type: "story",
    url: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
  }
];

test("Header List renders without error", async () => {
  const { container } = render(<HeaderList posts={posts} />);
  const list = [...container.querySelectorAll("li")].length;

  expect(list).toBe(3);
});

test("Header List renders without error when there is no params", async () => {
  const { container } = render(<HeaderList />);
  const list = [...container.querySelectorAll("li")].length;
  expect(list).toBe(0);
});

test("Header List renders more posts when default max_post is changed", async () => {
  const { container } = render(<HeaderList posts={posts} max_posts={1} />);
  const list = [...container.querySelectorAll("li")].length;
  expect(list).toBe(1);
});

test("Header List renders without error even with empty list", async () => {
  const { container } = render(<HeaderList posts={[]} />);
  const list = [...container.querySelectorAll("li")].length;

  expect(list).toBe(0);
});
