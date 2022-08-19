import styled from "styled-components";

export default function Title({ title, margin }) {
  return <TitleText margin={margin}>{title}</TitleText>;
}

const TitleText = styled.h3`
  font-size: 1.4em;
  font-weight: 700;
  margin: ${({ margin }) => margin};
`;
