import React from "react";
import styled from "styled-components";
import menu from "../img/icon-menu.png";
import logo from "../img/logo.png";

const NavBarTop = () => {
  return (
    <MainBarTop>
      <button>
        <HamburgerImage src={menu} />
      </button>
      <a href="/">
        <MainBarLogo src={logo} />
      </a>
    </MainBarTop>
  );
};

const MainBarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HamburgerImage = styled.img`
  height: 14px;
  width: auto;
  margin-right: 10px;
`;

const MainBarLogo = styled.img`
  height: auto;
  width: 85px;
`;

export default NavBarTop;
