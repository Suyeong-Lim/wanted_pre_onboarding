import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CarouselData } from "./data/CarouselData";
import nextBtn from "../img/nextBtn.svg";
import prevBtn from "../img/prevBtn.svg";

//style
import "../styles/topbanner.css";
import "../styles/responsive.css";

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
    <main className="Main">
      <div className="TopBannerWrapper">
        <div
          className="SlderTrack"
          style={{
            width: "42009px",
            transform: `translateX(${-translateX}px)`,
            transition:
              current == 1 || current >= carouselcount - 2
                ? "none"
                : "500ms all ease-in-out",
          }}
        >
          <div className="SlidesContainer">
            {stateCarousel.map((slider, id) => {
              return (
                <SlideItem isActive={id === current ? active : !active}>
                  <img className="SlideImg" src={slider.img} key={id}></img>
                  <Information isActive={id === current ? active : !active}>
                    <h2 className="InfoTitle">{slider.title}</h2>
                    <h3 className="InfoContents">{slider.contents}</h3>
                    <hr className="Divider" />
                    <a className="InfoDirectBtn">
                      <span className="Label">바로가기 </span>
                      <button className="button">
                        <img src={nextBtn} />
                      </button>
                    </a>
                  </Information>
                </SlideItem>
              );
            })}
          </div>
        </div>
        <div className="TopBannerBtn next" onClick={() => ClickHandler("next")}>
          <img src={nextBtn} />
        </div>
        <div
          className="TopBannerBtn prev "
          onClick={() => ClickHandler("prev")}
        >
          <img src={prevBtn} />
        </div>
      </div>
    </main>
  );
}

const Information = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  left: 34px;
  @media ${(props) => props.theme.tabletM} {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: fit-content;
    text-align: center;
    margin: 0 auto;
  }
  ${({ isActive }) => {
    return isActive ? `opacity : 0` : `opacity:1`;
  }};
`;

const SlideItem = styled.div`
  position: relative;
  padding: 0 12px;

  ${({ isActive }) => {
    return isActive ? `filter:brightness(50%)` : `filter:brightness(100%)`;
  }};
`;

export default TopBanner;
