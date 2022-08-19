import styled from "styled-components";

export default function TabList({ children }) {
  // children을 통해서 prop drilling을 피할 수 있다.
  return <TabListBlock>{children}</TabListBlock>;
}

const TabListBlock = styled.div`
  display: flex;
  border: 1px solid #000;
`;
