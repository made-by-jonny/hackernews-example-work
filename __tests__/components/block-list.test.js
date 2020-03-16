import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BlockList from "../../components/block-list";

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

test("Block List renders without error", async () => {
  const { container } = render(<BlockList posts={posts} />);
  const list = [...container.querySelectorAll("li")].length;
  expect(list).toBe(1);
});

test("Block List renders without error when there is no params", async () => {
  const { container } = render(<BlockList />);
  const list = [...container.querySelectorAll("li")].length;
  expect(list).toBe(0);
});

test("Block List renders more posts when default start_post is changed", async () => {
  const { container } = render(<BlockList posts={posts} start_post={0} />);
  const list = [...container.querySelectorAll("li")].length;
  expect(list).toBe(5);
});

test("Block List renders fine without posts", async () => {
  const { container } = render(<BlockList posts={[]} />);
  const list = [...container.querySelectorAll("li")].length;
  expect(list).toBe(0);
});
