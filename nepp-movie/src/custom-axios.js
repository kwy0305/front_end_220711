import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzUxMzgyOGY0MGU4YTgwNzMxYjBhN2Y1YTUwMjExNSIsInN1YiI6IjVlOGE3YjhiYjE4ZjMyMDAxM2UyZDUwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uqfn7ygDJUCKh_TZhcuGR2qIVxYRJD8QSLGyP9XwfcM",
  },
});

export const getPopular = async (category) => {
  let { data } = await instance.get(`${category}/popular`, {
    params: {
      language: "ko-KR",
    },
  });

  return data;
};

// 영화 상세보기 데이터 받아오기
// /movie/243123

// movie/123123?language=ko-KR
export const getDetail = async (url) => {
  let result = await instance.get(`${url}?language=ko-KR`);

  return result;
};
