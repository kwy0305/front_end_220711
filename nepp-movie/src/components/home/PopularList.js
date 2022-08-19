import styled from "styled-components";
import Title from "../common/Title";
import PopularItem from "./PopularItem";
import { useEffect, useState } from "react";
import { getPopular } from "../../custom-axios";
import TabList from "../common/TabList";
import TabMenu from "../common/TabMenu";

export default function PopularList({ title }) {
  const [data, setData] = useState([]);
  const [tabList, setTabList] = useState([
    { id: 1, text: "TV", active: true, category: "tv" },
    { id: 2, text: "Movie", active: false, category: "movie" },
  ]);

  const onClickTab = (id) => {
    setTabList(
      tabList.map((menu) =>
        menu.id === id ? { ...menu, active: true } : { ...menu, active: false }
      )
    );
  };

  useEffect(() => {
    // tabList가 업데이트 될 때마다 useEffect안의 코드 가 실행
    //  => tabList가 변할 때마다 fetchData 함수를 재생성 후 실행.
    //
    const fetchData = async () => {
      // Array.protype.find() => 조건에 부합하는 요소 한개만(첫번째)만 반환(배열x)
      const category = tabList.find((menu) => menu.active).category;
      let { results } = await getPopular(category);
      setData(results);
    };

    fetchData();
    //
  }, [tabList]);

  const tabListJsx = tabList.map((menu) => (
    <TabMenu key={menu.id} menu={menu} onClickTab={onClickTab} />
  ));

  return (
    <ListBlock>
      <TitleBox>
        <Title title={title} margin="0 20px 0 0" />
        <TabList>{tabListJsx}</TabList>
      </TitleBox>

      <ul>
        {data.map((item) => (
          <PopularItem key={item.id} item={item} />
        ))}
      </ul>
    </ListBlock>
  );
}

const ListBlock = styled.div`
  margin-bottom: 100px;
  ul {
    margin-top: 30px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
