import styled from "styled-components";
import Title from "../common/Title";
import PopularItem from "./PopularItem";
import { useEffect, useState } from "react";
import { getPopular } from "../../custom-axios";

export default function PopularList({ title, type }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let { results } = await getPopular(type);
    setData(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ListBlock>
      <Title title={title} />
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
