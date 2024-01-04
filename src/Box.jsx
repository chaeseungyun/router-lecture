import styled from "styled-components";
import { useParams } from "react-router-dom";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.color || "black"};
`;
let id=0;

const colorarr=[`red`,`green`,`blue`];

export default function Box() {
  const params=useParams();
  id=Math.floor(params.number/5);
  return <ColorBox color= {`${colorarr[id]}`}/>;
}
