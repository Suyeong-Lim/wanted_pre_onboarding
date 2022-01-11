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
  margin-right: 30px;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
`;

const Menu = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
`;

export default GnB;
