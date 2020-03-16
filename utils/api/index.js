import axios from "axios";

const api = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0"
});

export const getIds = async (postType = "newstories", start = 0, end = 10) => {
  try {
    const ids = await api.get(`/${postType}.json?print=pretty`);
    return ids.data.splice(start, end);
  } catch (error) {
    throw error;
  }
};

export const getItems = async (ids = []) => {
  if (ids.length === 0) return [];
  try {
    const rawPosts = await Promise.all(
      ids.map(async id => await api.get(`/item/${id}.json?print=pretty`))
    );
    const posts = rawPosts.map(item => item.data).filter(item => item.url);
    return posts;
  } catch (error) {
    throw error;
  }
};

export default api;
