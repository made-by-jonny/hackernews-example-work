import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Landing from "../../pages/index";

const posts = [
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  },
  {
    title: "111",
    url: "https://fake.com"
  }
];
jest.mock("../../utils/api", () => ({
  getIds: () => Promise.resolve({ data: [1, 2, 3, 4, 5, 6] }),
  getItems: () =>
    Promise.resolve([
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
      },
      {
        title: "111",
        url: "https://fake.com"
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
