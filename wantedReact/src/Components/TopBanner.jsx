import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { CarouselData } from "./data/CarouselData";

function TopBanner() {
  const [centerStyle, setCenterStyle] = useState(null);
  const [cursor, setCursor] = useState(0);
  const newCarouselData = [...CarouselData];
  const count = newCarouselData.length; //데이터 개수
  const SlideListRef = useRef();
  const [translateX, setTranslateX] = useState(0);

  useLayoutEffect(() => {
    const browserWidth = window.innerWidth;

    setCenterStyle({
      transform: `translateX(-${1060 - (browserWidth - 1060) / 2}px)`,
    });
  }, []);

  useEffect(() => {
    console.log(SlideListRef.current.clientWidth);
    console.log(window.innerWidth);
    console.log(SlideListRef.current.clientWidth * cursor);
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
    //현재 화면보다 이미지 개수의 숫자가 적으면
    //커서가 크면, 다시
    //현재 이미지 총 개수보다 커서가 크면 => 커서를 0 으로 돌리기. 다시 원위치로 돌아감
    //만약 커서보다 숫자가 -1로 되면 현재 슬라이드 위치를 이미지 개수보다 1작은걸로..(마지막 이미지로)
    //transitionEnd 가 끝날때 이 작업을 해줘야 인피니트처럼 구현가능.
    if (cursor <= 1) {
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
                <TestDiv ref={SlideListRef}>
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
  /* overflow: hidden; */
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
