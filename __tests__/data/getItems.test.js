import { getItems, getIds } from "../../utils/api";
import mockAxios from "axios";

describe("Get Items from hacker news", () => {
  test("Get gets from ids from hacker news api", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          title: "111",
          url: "https://fake.com"
        }
      })
    );

    const data = await getItems([1, 2, 3, 4, 5, 6]);
    expect(data.length).toBe(6);
  });

  test("Get items throws an error and returns a message", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.reject({
        message: "something went wrong"
      })
    );

    try {
      await getItems([1, 2, 3, 4, 5, 6]);
    } catch (error) {
      expect(error.message).toBe("something went wrong");
    }
  });

  test("Get items throws an empty array when no ids are passed", async () => {
    const data = await getItems();
    expect(data.length).toBe(0);
  });
});

describe("Get ids from hacker news", () => {
  test("get ids from api max length should be 10", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      })
    );

    const data = await getIds("newstories");
    expect(data.length).toBe(10);
  });

  test("filter results from api", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      })
    );

    const data = await getIds("newstories", 0, 5);
    expect(data.length).toBe(5);
  });

  test("Get ids throws an error and returns a message", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.reject({
        message: "something went wrong"
      })
    );

    try {
      await getIds();
    } catch (error) {
      expect(error.message).toBe("something went wrong");
    }
  });
});
