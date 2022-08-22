import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopular } from "../../custom-axios";
import Title from "../common/Title";
import MovieItem from "./MovieItem";
import { useInView } from "react-intersection-observer";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;
    if (inView) setPage((page) => page + 1);
  }, [inView, isLoading]);

  useEffect(() => {
    setIsLoading(true);
    getPopular("movie", page).then((res) => {
      setMovieList((movieList) => [...movieList, ...res.results]);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, [page]);

  return (
    <div>
      <Title title="인기 영화" margin="0 0 40px 0" />
      <ListBlock>
        {movieList.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
        <div ref={ref}></div>
      </ListBlock>
    </div>
  );
}

const ListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
