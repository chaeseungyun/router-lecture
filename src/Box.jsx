import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.color};
`;

export default function Box() {
  
  const params  = useParams();
  //console.log(params)
  console.log(parseInt(params.number))
  let c = "red";
  let paramsNum = parseInt(params.number)

  if (paramsNum <= 10) {
    c = "red";
  }
  else if (paramsNum > 10 && paramsNum < 25) {
    c = "blue"
  }
  else {
    c = "black"
  }
  
  return (
    <ColorBox color={c} />
  );

}
