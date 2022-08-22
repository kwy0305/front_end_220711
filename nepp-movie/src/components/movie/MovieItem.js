import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MovieItem({ movie, ref }) {
  const { title, release_date, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;

  return (
    <Block ref={ref}>
      <Link to={`/movie/${movie.id}`}>
        <ImgBox>
          <img src={imgUrl} alt={title} />
        </ImgBox>
        <DescBox>
          <TitleText>{title}</TitleText>
          <ReleaseDate>{release_date}</ReleaseDate>
        </DescBox>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  flex-basis: 200px;
  flex-grow: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.2);
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: tomato;
  img {
    width: 100%;
  }
`;

const DescBox = styled.div`
  padding: 10px 0 20px 5px;
`;

const TitleText = styled.h4`
  font-size: 1.2em;
  font-weight: 700;
`;

const ReleaseDate = styled.span`
  color: #bbb;
`;
