import { useParams } from "react-router-dom";
import styled from "styled-components";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(box_c) => box_c.color || "black"};
`;

export default function Box() {
  const param = useParams();
  console.log(param);
  const props = parseInt(param.number);
  let box_c = "red";
  if (props > 15) {
    box_c = "blue";
  } else if (props > 10) {
    box_c = "green";
  } else if (props > 5) {
    box_c = "white";
  }

  return <ColorBox color={box_c} />;
}
