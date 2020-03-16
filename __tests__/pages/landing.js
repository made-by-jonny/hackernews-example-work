import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Landing from "../../pages/index";

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
jest.mock("../../utils/api", () => ({
  getIds: () => Promise.resolve({ data: [1, 2, 3, 4, 5, 6] }),
  getItems: () =>
    Promise.resolve([
      {
        by: "bookofjoe",
        descendants: 0,
        id: 22582812,
        score: 1,
        time: 1584271451,
        title:
          "Coronary Sinus Neuropeptide Y Levels&Adverse Outcomes in Patients W Stable CHF",
        type: "story",
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
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
        url:
          "https://jamanetwork.com/journals/jamacardiology/fullarticle/2757539"
      }
    ])
}));

describe("landing page tests", () => {
  test("landing page should run without error", async () => {
    await Landing.getInitialProps({});

    const { container } = render(<Landing posts={posts} />);
    const h1Text = container.querySelector("h1").innerHTML;
    const veryLatest = [...container.querySelectorAll("#very-latest-list li")]
      .length;
    const genericPosts = [...container.querySelectorAll("#read-more-list li")]
      .length;

    expect(h1Text).toEqual("Latest News");
    expect(veryLatest).toEqual(4);
    expect(genericPosts).toEqual(8);
  });

  test("landing page should runs without posts doesn't error", async () => {
    const { container } = render(<Landing />);
    const veryLatest = [...container.querySelectorAll("#very-latest-list li")]
      .length;
    const genericPosts = [...container.querySelectorAll("#read-more-list li")]
      .length;

    expect(veryLatest).toEqual(0);
    expect(genericPosts).toEqual(0);
  });
});
