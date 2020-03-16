import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Landing, { RenderPosts } from "../../pages/index";

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
    const props = await Landing.getInitialProps({});

    const { container } = render(<Landing posts={posts} />);
    const veryLatest = [...container.querySelectorAll("#very-latest-list li")]
      .length;
    const genericPosts = [...container.querySelectorAll("#read-more-list li")]
      .length;

    expect(props).toEqual({ posts });
    expect(veryLatest).toEqual(4);
    expect(genericPosts).toEqual(8);
  });

  test("landing page should render error message without passing props error", async () => {
    const { container } = render(<Landing />);
    const h3messate = container.querySelector("h3").textContent;

    expect(h3messate).toEqual("There was an issue loading recent posts");
  });

  test("RenderPosts should render error message when passed no params", async () => {
    const { container } = render(<RenderPosts />);
    const h3messate = container.querySelector("h3").textContent;

    expect(h3messate).toEqual("There was an issue loading recent posts");
  });

  test("landing page should run and show error message", async () => {
    const { container } = render(<Landing posts={[]} />);
    const h3messate = container.querySelector("h3").textContent;

    expect(h3messate).toEqual("There was an issue loading recent posts");
  });
});
