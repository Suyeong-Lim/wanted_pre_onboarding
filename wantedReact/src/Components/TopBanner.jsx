import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import { CarouselData } from "./data/CarouselData";

// @Todo : 인피니트 캐러셀 자연스럽게 

function TopBanner() {
  const newCarouselData = [...CarouselData];
  const [stateCarousel, setStateCarousel] = useState(newCarouselData); //앞뒤 엘레멘트 클론용
  const carouselcount = stateCarousel.length; //데이터 개수

  const [current, setCurrent] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  const SlideListRef = useRef();

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

  //첫 렌더링 시 위치 조정
  useLayoutEffect(() => {
    console.log(SlideListRef.current.clientWidth);

    setTranslateX(SlideListRef.current.clientWidth * current + 1524 / 2);
  }, []);

  const ClickHandler = useCallback((mode) => {
    if (mode === "prev") {
      console.log(current);
      if (current < 1) {
        //prev값이 음수가 되려고 하면
        setTranslateX(SlideListRef.current.clientWidth * current + 1524 / 2);
        setCurrent(carouselcount - 2); //마지막 13 번째 캐러셀 이미지로
      } else {
        setTranslateX(SlideListRef.current.clientWidth * current + 1524 / 2);
        setCurrent((old) => --old);
      }
    } else if (mode === "next") {
      if (current >= carouselcount - 2) {
        //next 횟수가 캐러셀 길이보다 커지면
        setTranslateX(SlideListRef.current.clientWidth * current + 1524 / 2);
        setCurrent(1);
      } else {
        //next 실행
        setCurrent((old) => ++old);
        setTranslateX(SlideListRef.current.clientWidth * current + 1524 / 2);
      }
    }
  });

  //인피니트 캐러셀을 자연스럽게만들기
  useEffect(() => {
    const transitionEnd = () => {
      if (current >= CarouselData.length - 1) {
      }
      if (current <= 1) {
        SlideListRef.current.style.trasition = "none";
      }
    };
    //트랜지션 멈췄다가 다시 시작하게하기? 이미지가 마지막에 도달했으면 현재 슬라이드 맨처음으로 돌리고 이미지 갯수보다 넘어가면
    //마지막 으로 돌아가게끔.
    document.addEventListener("transitionend", transitionEnd);

    return () => {
      document.removeEventListener("transitionend", transitionEnd);
    };
  }, [current, translateX]);

  return (
    <Main>
      <TopBannerWrapper>
        <SlderTrack
          style={{
            width: "42009px",
            transition: ".5s ease",
            transform: `translateX(${-translateX}px)`,
          }}
        >
          <SlidesContainer>
            {stateCarousel.map((slider, id) => {
              return (
                <TestDiv ref={SlideListRef}>
                  <TestImg src={slider.img} key={id}></TestImg>
                </TestDiv>
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
