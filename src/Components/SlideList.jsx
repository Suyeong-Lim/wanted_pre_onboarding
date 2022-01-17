import React from "react";
import styled from "styled-components";
import { CarouselData } from "./data/CarouselData";

function SlideList() {
  return <ImageList></ImageList>;
}
const ImageList = styled.div`
  width: 250px;
  height: 250px;
  background-color: blueviolet;
`;

const ContentsWrapper = styled.div`
  width: 200px;
  height: 200px;
`;
export default SlideList;
