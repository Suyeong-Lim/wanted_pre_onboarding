import React, { ReactElement } from "react";
import styled from "styled-components";
import NavBarTop from "./NavBarTop";
import GnB from "./GnB";
import Aside from "./Aside";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <NavBar>
          <NavBarTop />
          <GnB />
          <Aside />
        </NavBar>
      </HeaderInner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  padding-right: initial;
  width: 100%;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  z-index: 100;
  background-color: #fff;
`;

const HeaderInner = styled.div`
  margin: 0 auto;
  height: 50px;
  max-width: 1060px;
  position: relative;
  display: flex;
  align-items: center;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${(props) => props.theme.tabletM} {
    height: 60px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export default Header;
