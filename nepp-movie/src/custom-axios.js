import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
});

console.log(process.env.REACT_APP_TMDB_API_KEY);

export const getPopular = async (category, page) => {
  let { data } = await instance.get(`${category}/popular`, {
    params: {
      language: "ko-KR",
      page,
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

// /movie/{movie_id}/credits => 배우, 제작진 등
// cast => 배우들

export const getSearch = async (query) => {
  try {
    let result = await instance.get("/search/multi", {
      params: {
        language: "ko-KR",
        query,
      },
    });
    return result;
  } catch (e) {
    console.log(e);
  }
};
