import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.color || "black"};
`;

export default function Box() {
  const color = useParams();
  let backgroundColor = "blue";

  if (!isNaN(color.number)) {
    if (color.number > 25) {
      backgroundColor = "black";
    } else if (color.number > 15) {
      backgroundColor = "red";
    }
  }
  console.log(color.number);

  return <ColorBox color={backgroundColor} />;
}
