import React from "react";
import styled from "styled-components";
import MenuList from "./MenuList";

const GnB = () => {
  return (
    <GnBConainer>
      <Menu>
        <MenuList />
      </Menu>
    </GnBConainer>
  );
};

const GnBConainer = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  @media ${(props) => props.theme.mobileM} {
  }
  @media ${(props) => props.theme.mobile} {
    position: relative;
    top: -13px;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  @media ${(props) => props.theme.mobile} {
    text-align: left;
  }
`;

export default GnB;
