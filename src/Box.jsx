import styled from "styled-components";
import { useParams } from "react-router-dom";

const ColorBox = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.color || "black"};
`;

export default function Box() {
  let { number } = useParams();
  console.log(number);

  const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const colorIndex =
    Math.floor(parseInt(number, 10) / 5) % rainbowColors.length;
  const boxColor = rainbowColors[colorIndex];

  return <ColorBox color={boxColor} />;
}
