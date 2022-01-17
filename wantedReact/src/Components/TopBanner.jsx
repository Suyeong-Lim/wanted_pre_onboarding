import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import { CarouselData } from "./data/CarouselData";

function TopBanner() {
  const newCarouselData = [...CarouselData];
  const [stateCarousel, setStateCarousel] = useState(newCarouselData); //앞뒤 엘레멘트 클론용
  const carouselcount = stateCarousel.length; //데이터 개수

  const [current, setCurrent] = useState(1);

  const windowWidth = window.innerWidth || document.body.clientWidth;
  const cardWidth = 1060 + 24; //(width + margin)
  const leftMargin = (windowWidth - cardWidth) / 2;

  const translateX = cardWidth * current - leftMargin;

  //앞,뒤 캐러셀이미지 복사
  useEffect(() => {
    //앞,뒤 엘레멘트 복사 후 캐러셀 state에 저장
    const carouselWithClones = [...newCarouselData];
    carouselWithClones.unshift(
      carouselWithClones[carouselWithClones.length - 1]
    );

    carouselWithClones.push(carouselWithClones[1]);

    setStateCarousel(carouselWithClones);
  }, []);

  const ClickHandler = useCallback((mode) => {
    if (mode === "prev") {
      console.log(current);
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

  console.log("current", current);

  console.log("carouselcount", carouselcount);

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
                <SlideItem>
                  <SlideImg src={slider.img} key={id}></SlideImg>
                </SlideItem>
              );
            })}
          </SlidesContainer>
        </SlderTrack>
        <TopBannerBtn onClick={() => ClickHandler("next")}>next</TopBannerBtn>
        <TopBannerBtn onClick={() => ClickHandler("prev")}>prev</TopBannerBtn>
      </TopBannerWrapper>
    </Main>
  );
}
const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
`;
const SlideItem = styled.div`
  background-color: whitesmoke;
  position: relative;
  padding: 0 12px;
`;
const SlideImg = styled.img`
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
`;
export default TopBanner;
