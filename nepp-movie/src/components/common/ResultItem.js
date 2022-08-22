import styled from "styled-components";
import { BsPerson, BsDisplay } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ResultItem({ result, setHide }) {
  const { media_type } = result;
  if (media_type === "person")
    return (
      <Block>
        <Link to="/">
          <BsPerson />
          <p> {result.name}</p>
        </Link>
      </Block>
    );

  if (media_type === "movie")
    return (
      <Block onClick={() => setHide(true)}>
        <Link to={`/movie/${result.id}`}>
          <BiMovie />
          <p>{result.title}</p>
        </Link>
      </Block>
    );

  if (media_type === "tv")
    return (
      <Block>
        <Link to={`/tv/${result.id}`}>
          <BsDisplay />
          <p> {result.name}</p>
        </Link>
      </Block>
    );
}

const Block = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    background-color: #fff;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    background-color: #ddd;
  }
  p {
    margin-left: 5px;
    line-height: 1.4em;
    font-size: 0.8em;
  }
`;
