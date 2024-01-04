import styled from "styled-components";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.color || "black"};
`;

export default function Box() {
  return <ColorBox color="blue" />;
}
