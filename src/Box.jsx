import { useParams } from "react-router-dom/dist";
import styled from "styled-components";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.color || "black"};
`;

export default function Box() {
  const params = useParams();
  let whatColor = "black";
  if (params.number < 5) {
    whatColor = "red";
  } else if (params.number >= 5 && params.number < 10) {
    whatColor = "green";
  } else {
    whatColor = "blue";
  }
  console.log(params.number);

  return <ColorBox color={whatColor} />;
}
