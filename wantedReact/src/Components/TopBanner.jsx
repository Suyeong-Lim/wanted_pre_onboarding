import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CarouselData } from "./data/CarouselData";
import nextBtn from "../img/nextBtn.svg";
import prevBtn from "../img/prevBtn.svg";

function TopBanner() {
  const newCarouselData = [...CarouselData];
  const [stateCarousel, setStateCarousel] = useState(newCarouselData); //앞뒤 엘레멘트 클론용
  const carouselcount = stateCarousel.length; //데이터 개수

  const [current, setCurrent] = useState(1);

  const windowWidth = window.innerWidth || document.body.clientWidth;
  const cardWidth = 1060 + 24; //(width + margin)
  const leftMargin = (windowWidth - cardWidth) / 2;

  const translateX = cardWidth * current - leftMargin;

  const [active, setActive] = useState(false);

  //앞,뒤 캐러셀이미지 복사
  useEffect(() => {
    const carouselWithClones = [...newCarouselData];
    carouselWithClones.unshift(
      carouselWithClones[carouselWithClones.length - 1]
    );
    carouselWithClones.push(carouselWithClones[1]);
    setStateCarousel(carouselWithClones);
  }, []);

  const ClickHandler = useCallback((mode) => {
    if (mode === "prev") {
      if (current <= 1) {
        //prev값이 음수가 되려고 하면
        setCurrent(carouselcount - 2); //마지막 13 번째 캐러셀 이미지로
      } else {
        setCurrent((old) => --old);
      }
    } else if (mode === "next") {
      if (current >= carouselcount - 2) {
        //next 횟수가 캐러셀 길이보다 커지면
        setCurrent(1);
      } else {
        //next 실행
        setCurrent((old) => ++old);
      }
    }
  });

  return (
    <Main>
      <TopBannerWrapper>
        <SlderTrack
          style={{
            width: "42009px",
            transform: `translateX(${-translateX}px)`,
            transition:
              current == 1 || current >= carouselcount - 2
                ? "none"
                : "500ms all ease-in-out",
          }}
        >
          <SlidesContainer>
            {stateCarousel.map((slider, id) => {
              return (
                <SlideItem isActive={id === current ? active : !active}>
                  <SlideImg src={slider.img} key={id}></SlideImg>
                  <Information isActive={id === current ? active : !active}>
                    <InfoTitle>{slider.title}</InfoTitle>
                    <InfoContents>{slider.contents}</InfoContents>
                    <Divider />
                    <InfoDirectBtn>
                      <Label>바로가기 </Label>
                      <span>
                        <img src={nextBtn} />
                      </span>
                    </InfoDirectBtn>
                  </Information>
                </SlideItem>
              );
            })}
          </SlidesContainer>
        </SlderTrack>
        <TopBannerBtnNext onClick={() => ClickHandler("next")}>
          <img src={nextBtn} />
        </TopBannerBtnNext>
        <TopBannerBtnPrev onClick={() => ClickHandler("prev")}>
          <img src={prevBtn} />
        </TopBannerBtnPrev>
      </TopBannerWrapper>
    </Main>
  );
}
const Information = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 160px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 0;
  text-align: left;
  left: 34px;
  ${({ isActive }) => {
    return isActive ? `opacity : 0` : `opacity:1`;
  }};
`;

const InfoTitle = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1;
  font-weight: 700;
  color: #333;
  width: "auto";
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
  line-height: 1.5;
`;
const InfoContents = styled.h3`
  margin: 0 20px;
  height: 44px;
  font-size: 14px;
  line-height: 1.64;
  color: #333;
`;
const Divider = styled.hr`
  height: 1px;
  margin: 0;
  border: none;
  flex-shrink: 0;
  background-color: #ececec;
  box-sizing: content-box;
`;

const InfoDirectBtn = styled.a`
  margin: 6px 0 0 13px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #36f;
  height: 40px;
  display: inline-flex;
`;

const Label = styled.span`
  display: inherit;
  align-items: center;
  justify-content: center;
`;

const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
`;
const SlideItem = styled.div`
  position: relative;
  padding: 0 12px;
  ${({ isActive }) => {
    return isActive ? `filter:brightness(50%)` : `filter:brightness(100%)`;
  }};
`;
const SlideImg = styled.img`
  border-radius: 4px;
`;
const Main = styled.main`
  padding-top: 25px;
`;

const TopBannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const SlderTrack = styled.div`
  position: relative;
`;

const TopBannerBtnNext = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 143px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  cursor: pointer;
  right: calc((100% - 1200px) / 2);
`;

const TopBannerBtnPrev = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 143px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  cursor: pointer;
  left: calc((100% - 1200px) / 2);
`;
export default TopBanner;
