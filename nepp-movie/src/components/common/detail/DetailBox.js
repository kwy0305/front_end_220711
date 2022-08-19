import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetail } from "../../../custom-axios";
import Loading from "../Loading";

// /movie/:id  => /movie/123
//   => usePrams() => {id : 123}
// /movie?name=seok&password=1234

export default function DetailBox() {
  // 숫자를 넣더라도 string으로 넘어온다
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  const {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    poster_path,
    backdrop_path,
  } = data;

  console.log(data);

  const imgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;

  // ?. (옵셔널 체이닝) : ?. 앞에 값이 undefined와 null 아닐 경우에만 참조
  // console.log({}.data?.age);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getDetail(pathname);

      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [pathname]);

  if (isLoading) return <Loading />;

  return (
    <Block backdropUrl={backdropUrl} isLoading={isLoading}>
      <Backdrop />
      <ImgBox>
        <img src={imgUrl} alt="" />
      </ImgBox>
      <ContentBox>
        <TitleBox>
          <h3>{title || name}</h3>
          <span>
            ({release_date?.substr(0, 4) || first_air_date?.substr(0, 4)})
          </span>
        </TitleBox>
        <Summary
          style={{ marginBottom: 10, fontSize: "1.2em", fontWeight: 700 }}
        >
          개요
        </Summary>
        <DescText>{overview || "개요 없음"}</DescText>
      </ContentBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  ${({ backdropUrl }) => css`
    background-image: url(${backdropUrl});
  `}
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

// 포토샵 레이어 - 어저스트 레이어?
const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  // 블러 처리
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  width: 300px;
  height: 450px;
  margin-right: 20px;
  img {
    height: 100%;
  }
  z-index: 100;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 40px;
  h3 {
    font-size: 2em;
    font-weight: 700;
  }
  span {
    font-size: 1.8em;
  }
`;

const ContentBox = styled.div`
  z-index: 100;
  color: #fff;
`;

const DescText = styled.p`
  line-height: 1.4em;
`;

const Summary = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: 700;
`;
