import { MenuListData } from "./data/MenuListData";
import React from "react";
import styled from "styled-components";

const MenuList = () => {
  return (
    <MenuListWrapper>
      {MenuListData.map((menu) => (
        <MenuALink key={menu.id}>{menu.name}</MenuALink>
      ))}
    </MenuListWrapper>
  );
};

const MenuListWrapper = styled.li`
  height: 14px;
  width: auto;
  margin-right: 10px;
`;

const MenuALink = styled.a`
  position: relative;
  vertical-align: middle;
  padding: 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
`;

export default MenuList;
