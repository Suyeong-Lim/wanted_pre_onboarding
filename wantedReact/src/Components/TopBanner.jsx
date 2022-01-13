import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import SlideList from "./SlideList";
import { CarouselData } from "./data/CarouselData";

function TopBanner() {
  const [centerStyle, setCenterStyle] = useState(null);
  const [cursor, setCursor] = useState(0);
  const newCarouselData = [...CarouselData];
  const count = newCarouselData.length; //데이터 개수
  const SlideList = useRef();
  const [translateX, setTranslateX] = useState(0);

  useLayoutEffect(() => {
    const browserWidth = window.innerWidth;

    setCenterStyle({
      transform: `translateX(-${1060 - (browserWidth - 1060) / 2}px)`,
    });
  }, []);

  useEffect(() => {
    console.log("?");
    console.log(SlideList.current);
  }, []);

  const chageCursorNext = () => {
    if (cursor >= count) {
      setCursor(1);
    } else {
      setCursor((prev) => ++prev);
    }
    test();
    console.log(cursor);
  };

  const chageCursorPrev = () => {
    console.log(cursor);
    if (cursor <= 1) {
      setCursor(count);
    }
    test();
  };

  const test = () => {
    setCenterStyle({
      width: "42009px",
      transition: ".5s ease",
      transform: `translateX(${count + cursor * 1060 * 1.4}px)`,
    });
  };

  return (
    <Main>
      <TopBannerWrapper>
        <SlderTrack style={centerStyle}>
          <SlidesContainer>
            {newCarouselData.map((slider, id) => {
              return (
                <TestDiv ref={SlideList} style={{ width: 1060 }}>
                  <TestImg src={slider.img} key={id}></TestImg>
                </TestDiv>
              );
            })}
          </SlidesContainer>
        </SlderTrack>
        <TopBannerBtn onClick={chageCursorNext}>next</TopBannerBtn>
        <TopBannerBtn onClick={chageCursorPrev}>prev</TopBannerBtn>
      </TopBannerWrapper>
    </Main>
  );
}
const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
`;
const TestDiv = styled.div`
  background-color: whitesmoke;
  position: relative;
  padding: 0 12px;
`;
const TestImg = styled.img`
  background-color: green;
  border-radius: 4px;
`;
const Main = styled.main`
  padding-top: 25px;
`;

const TopBannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: pink;
`;

const SlderTrack = styled.div`
  position: relative;

  background-color: blanchedalmond;
`;

const TopBannerBtn = styled.div`
  display: flex;
  background-color: orange;
  margin: 20px;
  width: 100px;
  padding: 20px;
  cursor: pointer;
`;
export default TopBanner;
