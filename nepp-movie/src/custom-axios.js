import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzUxMzgyOGY0MGU4YTgwNzMxYjBhN2Y1YTUwMjExNSIsInN1YiI6IjVlOGE3YjhiYjE4ZjMyMDAxM2UyZDUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uqfn7ygDJUCKh_TZhcuGR2qIVxYRJD8QSLGyP9XwfcM",
  },
});

export const getPopular = async (type) => {
  let { data } = await instance.get(`${type}/popular`, {
    params: {
      language: "ko-KR",
    },
  });

  return data;
};
