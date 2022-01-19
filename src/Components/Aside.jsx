import React from "react";
import styled from "styled-components";
import search from "../img/search.svg";
import alarm from "../img/alarm.svg";
import avatar from "../img/avatar.png";

const Aside = () => {
  return (
    <AsideWrapper>
      <AsideUl>
        <AsideList>
          <SearchBtn>
            <img src={search} />
          </SearchBtn>
        </AsideList>

        <AsideList>
          <NotiBtn>
            <img src={alarm} />
          </NotiBtn>
        </AsideList>

        <ProfileBox>
          <ProfileButton>
            <AvatarBorder>
              <AvatarImg src={avatar}></AvatarImg>
            </AvatarBorder>
          </ProfileButton>
        </ProfileBox>

        <LeftDivision>
          <DashBoardBtn>기업서비스</DashBoardBtn>
        </LeftDivision>
      </AsideUl>
    </AsideWrapper>
  );
};

const AsideWrapper = styled.aside`
  padding: 9px 0;
  margin: 0;
  border: 0;
  display: flex;
  align-items: center;
  margin-left: 50px;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
  @media ${(props) => props.theme.mobileM} {
    display: none;
  }
`;

const AsideUl = styled.ul`
  display: flex;
`;

const AsideList = styled.li`
  padding: 0 10px;
  position: relative;
  height: 100%;
`;

const SearchBtn = styled.button`
  margin-top: 5px;
`;

const NotiBtn = styled.button`
  margin-top: 5px;
`;

const ProfileBox = styled.li`
  display: inline-flex;
  flex-direction: row;
  margin-left: -15px;
  margin-right: 5px;
`;
const ProfileButton = styled.button`
  position: relative;
`;

const AvatarBorder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-left: 24px;
`;

const AvatarImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LeftDivision = styled.li`
  display: inline-flex;
  ::before {
    display: block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: auto 10px;
  }
`;

const DashBoardBtn = styled.a`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  font-weight: 400;
  margin-left: 15px;
`;
export default Aside;
